from setuptools import setup, find_packages

setup(
    name='apiverve_uuidgenerator',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='UUID Generator is a UUID generator API that produces random RFC 4122 version 4 UUIDs on demand. Request single IDs or batches in standard lowercase, uppercase, or strings without hyphens.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/uuidgenerator?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
