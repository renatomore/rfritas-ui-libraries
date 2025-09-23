# rfritas-ui-libraries

[EN-US](#en-us) | [PT-BR](#pt-br)

---

## (EN-US)

Welcome to `rfritas-ui-libraries`, a monorepo for developing and maintaining high-quality React component libraries. This project uses [Turborepo](https://turborepo.org/) for its high-performance build system and [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing.

### What's Inside?

This monorepo contains the following packages:

-   `@rfritas/thoc-ui`: A React component library for building modern and accessible user interfaces.
-   `@repo/eslint-config`: Shared ESLint configurations.
-   `@repo/typescript-config`: Shared `tsconfig.json` configurations.

### Getting Started

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rfritas/rfritas-ui-libraries.git
    cd rfritas-ui-libraries
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    ```

### Main Scripts

-   `npm run build`: Build all packages ready for production.
-   `npm run dev`: Start development servers for all packages.
-   `npm run lint`: Lint all packages.
-   `npm run test`: Run tests for all packages.
-   `npm run changeset:add`: Create a new changeset to document a change for versioning.

### Contributing

We are excited to welcome contributors! Please read our [**Contributing Guidelines**](./CONTRIBUTING.md) to learn how you can get involved.

### License

This project is licensed under the MIT License.

---

## (PT-BR)

Bem-vindo ao `rfritas-ui-libraries`, um monorepo para desenvolver e manter bibliotecas de componentes React de alta qualidade. Este projeto usa [Turborepo](https://turborepo.org/) para seu sistema de build de alta performance e [Changesets](https://github.com/changesets/changesets) para gerenciar versionamento e publicação.

### O Que Há Dentro?

Este monorepo contém os seguintes pacotes:

-   `@rfritas/thoc-ui`: Uma biblioteca de componentes React para construir interfaces de usuário modernas e acessíveis.
-   `@repo/eslint-config`: Configurações compartilhadas do ESLint.
-   `@repo/typescript-config`: Configurações compartilhadas do `tsconfig.json`.

### Como Começar

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/rfritas/rfritas-ui-libraries.git
    cd rfritas-ui-libraries
    ```

2.  **Instale as dependências:**
    ```sh
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

### Scripts Principais

-   `npm run build`: Compila todos os pacotes para produção.
-   `npm run dev`: Inicia os servidores de desenvolvimento para todos os pacotes.
-   `npm run lint`: Executa o lint em todos os pacotes.
-   `npm run test`: Executa os testes para todos os pacotes.
-   `npm run changeset:add`: Cria um novo changeset para documentar uma alteração para versionamento.

### Contribuição

Estamos animados para receber contribuidores! Por favor, leia nosso [**Guia de Contribuição**](./CONTRIBUTING.md) para aprender como você pode se envolver.

### Licença

Este projeto está licenciado sob a Licença MIT.
```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
