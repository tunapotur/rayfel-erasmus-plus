import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            import: importPlugin,
        },
        rules: {
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        ['^react', '^next'],
                        ['^@?\\w'],
                        ['^@/src'],
                        ['^@/lib', '^@/components'],
                        ['^@/sample_data'],
                        ['^\\.'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
        },
    },
]);

export default eslintConfig;
