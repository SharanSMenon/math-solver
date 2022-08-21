import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

declare module globalThis {
  var pyodide: any;
  var __pyodide_module: any;
}
declare let loadPyodide: any;
const PYODIDE_BASE = 'https://cdn.jsdelivr.net/pyodide/v0.20.0/full/'

@Injectable({
  providedIn: 'root'
})
export class PyodideService {

  isLoading = false;
  loaded = false;
  isLoadingObs: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private snackbarService: SnackbarService
  ) { }

  async loadPyo() {
    if (!globalThis.__pyodide_module) {
      if (!this.loaded) {
        this.isLoadingObs.next(true);
        this.isLoading = true;
        loadPyodide({ indexURL: PYODIDE_BASE }).then(async (pyodide: any) => {
          globalThis.pyodide = pyodide;
          await pyodide.loadPackage(["sympy", "numpy", "micropip"])
          await pyodide.runPythonAsync(
            `
          import micropip
          await micropip.install('/assets/antlr4_python3_runtime-4.7-py3-none-any.whl')
          await micropip.install('/assets/kernel/dist/sympy_kernel-0.0.1-py3-none-any.whl')
        `);
          await pyodide.runPythonAsync(`
        import sympy
        # import numpy
        import sympy_kernel
        `)
          this.isLoading = false;
          this.loaded = true;
          this.isLoadingObs.next(false);
        })
      }
    }
  }

  newNamespace(name: string, object: any) {
    globalThis.pyodide.registerJsModule(name, object);
  }

  unregisterNameSpace(name: string) {
    globalThis.pyodide.unregisterJsModule(name)
  }

  createIntegralStepsTemplate(latex: string): string {
    const expressionCode = `
    from sympy_kernel import integral_steps
    rst = R"${latex}"
    out = integral_steps(rst)
    `
    return expressionCode
  }

  createDerivativeStepsTemplate(latex: string): string {
    const expressionCode = `
    from sympy_kernel.api import deriv_steps
    rst = R"${latex}"
    out = deriv_steps(rst)
    `
    return expressionCode
  }

  get loading(): boolean {
    return this.isLoading
  }

  runPython(code: string): Map<string, string> {
    let out;
    try {
      globalThis.pyodide.runPython(code);
      out = globalThis.pyodide.globals.get("out");
    } catch {
      const map = new Map<string, string>();
      map.set('type', 'error');
      this.snackbarService.error()
      return map
    }
    return out.toJs();
  }

  runMatrixPython(code: string, namespace: object): Map<string, string> {
    let out;
    let ns = globalThis.pyodide.toPy(namespace);
    try {
      globalThis.pyodide.runPython(code,
        { globals: ns });
      out = ns.get("out");
    } catch {
      const map = new Map<string, string>();
      map.set('type', 'error');
      this.snackbarService.error()
      return map
    }
    return out.toJs();
  }
}
