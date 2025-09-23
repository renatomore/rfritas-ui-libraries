# Contributing

Thank you for your interest in contributing to this project! We appreciate your time and effort. To ensure a smooth and effective collaboration, please follow the guidelines below.

---

## How to Contribute (EN-US)

Our repository is configured with a CI/CD pipeline that automates many steps, from pull request creation to package publishing.

### Contribution Steps

1.  **Fork & Clone**
    -   Fork the repository to your GitHub account.
    -   Clone your forked repository to your local machine.

2.  **Create a Branch**
    -   Create a new branch following our naming convention:
        -   `feature/<description>` for new features.
        -   `fix/<description>` for bug fixes.
        -   `docs/<description>` for documentation changes.
    -   Example: `git checkout -b feature/add-new-component`

3.  **Development**
    -   Install dependencies: `npm ci`
    -   Make your code changes.
    -   Ensure all tests pass: `npm run test`
    -   Check for linting errors: `npm run lint`

4.  **Add a Changeset**
    -   If your changes affect any of the packages (e.g., adding a feature, fixing a bug), you **must** add a changeset. This is crucial for versioning and publishing.
    -   Run the command: `npm run changeset:add`
    -   Follow the prompts to select the affected packages, the type of change (Patch, Minor, or Major), and write a clear description of the change. This description will be used in the changelog.

5.  **Push and Pull Request**
    -   Commit your changes and the generated changeset file.
    -   Push your branch to your forked repository: `git push origin feature/add-new-component`
    -   **Our CI/CD pipeline will automatically create a Pull Request for you!** The workflow will run all checks (lint, test, build) and, if they pass, open a PR from your branch to `main`. If a PR already exists for that branch, it will simply be updated.

6.  **Review**
    -   A maintainer will review your Pull Request.
    -   Once approved and merged, another pipeline will automatically publish the new package versions to npm based on the changesets.

---

## Como Contribuir (PT-BR)

Nosso repositório é configurado com um pipeline de CI/CD que automatiza muitas etapas, desde a criação do pull request até a publicação dos pacotes.

### Passos para Contribuição

1.  **Fork & Clone**
    -   Faça um "Fork" do repositório para a sua conta do GitHub.
    -   Clone o seu repositório "forkado" para a sua máquina local.

2.  **Crie uma Branch**
    -   Crie uma nova branch seguindo nossa convenção de nomenclatura:
        -   `feature/<descricao>` para novas funcionalidades.
        -   `fix/<descricao>` para correções de bugs.
        -   `docs/<descricao>` para alterações na documentação.
    -   Exemplo: `git checkout -b feature/adicionar-novo-componente`

3.  **Desenvolvimento**
    -   Instale as dependências: `npm ci`
    -   Faça suas alterações no código.
    -   Garanta que todos os testes passem: `npm run test`
    -   Verifique se não há erros de lint: `npm run lint`

4.  **Adicione um Changeset**
    -   Se suas alterações afetam qualquer um dos pacotes (ex: adicionando uma funcionalidade, corrigindo um bug), você **deve** adicionar um changeset. Isso é crucial para o versionamento e a publicação.
    -   Execute o comando: `npm run changeset:add`
    -   Siga as instruções para selecionar os pacotes afetados, o tipo de mudança (Patch, Minor ou Major) e escreva uma descrição clara da alteração. Essa descrição será usada no changelog.

5.  **Push e Pull Request**
    -   Commite suas alterações e o arquivo de changeset gerado.
    -   Envie sua branch para o seu repositório "forkado": `git push origin feature/adicionar-novo-componente`
    -   **Nosso pipeline de CI/CD criará um Pull Request para você automaticamente!** O workflow executará todas as verificações (lint, teste, build) e, se passarem, abrirá um PR da sua branch para a `main`. Se um PR já existir para essa branch, ele será apenas atualizado.

6.  **Revisão**
    -   Um mantenedor revisará seu Pull Request.
    -   Após a aprovação e o merge, outro pipeline publicará automaticamente as novas versões dos pacotes no npm com base nos changesets.
