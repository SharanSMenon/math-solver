from setuptools import setup, find_packages

VERSION = '0.0.1' 
DESCRIPTION = 'Sympy kernel'
LONG_DESCRIPTION = 'SymPy Kernel for the Advanced Math Solver App'

# Setting up
setup(
       # the name must match the folder name
        name="sympy_kernel", 
        version=VERSION,
        author="Sharan Sajiv Menon",
        author_email="sharansajivmenon@gmail.com",
        description=DESCRIPTION,
        long_description=LONG_DESCRIPTION,
        packages=find_packages(),
        install_requires=[], # add any additional packages that 
        # needs to be installed along with your package. Eg: 'caer'
        
        keywords=['python', 'sympy', 'mathematics'],
        classifiers= [
            "Development Status :: 3 - Alpha",
            "Intended Audience :: Education",
            "Programming Language :: Python :: 3",
            "Operating System :: MacOS :: MacOS X",
            "Operating System :: Microsoft :: Windows",
        ]
)