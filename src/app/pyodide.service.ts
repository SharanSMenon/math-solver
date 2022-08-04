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
  isLoadingObs: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private snackbarService: SnackbarService
  ) { }

  async loadPyo() {
    if (!globalThis.__pyodide_module) {
      this.isLoadingObs.next (true);
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
        this.isLoadingObs.next (false);
      })
    }
  }

  createTemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.solveLatexExprSimple(rst)
    `
    return expressionCode
  }

  createExpressionTemplate(latex: string): string {
    const expressionCode = `
    import sympy_kernel
    rst = R"${latex}"
    out = sympy_kernel.getMultipleExpr(rst)
    `
    return expressionCode
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
    globalThis.pyodide.runPython(code);
    let out;
    try {
      out = globalThis.pyodide.globals.get("out");
    } catch {
      const map = new Map<string, string>();
      map.set('type', 'error');
      this.snackbarService.error()
      return map
    }
    return out.toJs();
  }
}
