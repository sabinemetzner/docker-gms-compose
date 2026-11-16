# 🐳 Guia Completo: Docker Compose + Cypress no GitHub Actions

## 📋 O que você tem

✅ **Backend** (Express.js na porta 3000)
✅ **Frontend** (Node.js na porta 8080)  
✅ **Testes** (Cypress)
✅ **Docker Compose** (orquestração)
✅ **GitHub Actions** (CI/CD automático)

## 🚀 Como Funciona Sem Docker Instalado

### Opção 1: GitHub Actions (Recomendado - Zero Setup)

1. **Faça push do seu código**
   ```bash
   git add .
   git commit -m "Setup Docker Compose para testes automatizados"
   git push origin main
   ```

2. **Acompanhe no GitHub**
   - Vá para **Actions** no seu repositório
   - Clique no workflow "Testes com Docker"
   - Veja os testes rodando em tempo real

3. **Veja os Resultados**
   - ✅ Logs de build das 3 imagens
   - ✅ Containers subindo e se comunicando
   - ✅ Testes Cypress executando
   - ✅ Relatórios (vídeos e screenshots) salvos como Artifacts

### Opção 2: Testar Localmente (Se Quiser)

Se quiser testar localmente sem instalar Docker Desktop, use:
```bash
docker compose up -d backend frontend
docker compose run --rm cypress
docker compose down
```

## 📁 Estrutura do Projeto

```
docker-gms-compose/
├── golden-movie-studio-backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── golden-movie-studio-frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── server-simple.js
├── tests/
│   ├── Dockerfile
│   ├── package.json
│   ├── cypress.config.js
│   └── cypress/e2e/cadastro.cy.js
├── docker-compose.yml
├── .github/workflows/docker-tests.yml
└── DOCKER_COMPOSE_GUIDE.md (este arquivo)
```

## 🔗 Como os Containers se Comunicam

Dentro do docker-compose, os containers podem se comunicar por nome:

- **Backend**: `http://backend:3000` (interno)
- **Frontend**: `http://frontend:8080` (interno)
- **Cypress**: acessa via `CYPRESS_baseUrl=http://frontend:8080`

## ✅ Checklist de Entrega

Antes de enviar para os tutores, verifique:

- [ ] Todos os Dockerfiles existem (backend, frontend, tests)
- [ ] `docker-compose.yml` define os 3 serviços
- [ ] `.github/workflows/docker-tests.yml` está configurado
- [ ] Pelo menos 1 workflow foi executado (Actions > Workflows)
- [ ] Os testes aparecem nos logs do GitHub Actions
- [ ] Os artifacts (vídeos/screenshots) foram salvos

## 📊 Monitorar Testes no GitHub

1. Vá para o seu repositório
2. Clique em **Actions**
3. Veja o workflow "Testes com Docker" rodando
4. Clique no job "build-and-test" para ver os logs

## 🎁 Bônus: Publicar no Docker Hub

Leia o arquivo [DOCKER_HUB_SETUP.md](./DOCKER_HUB_SETUP.md) para:
- Configurar Docker Hub
- Adicionar GitHub Secrets
- Fazer push automático das imagens

## 🆘 Troubleshooting

### "Workflow não está rodando"
→ Verifique em **Settings** → **Actions** → General → "Allow all actions"

### "Testes falhando no GitHub mas passam localmente"
→ Pode ser timing. O workflow aguarda 15s, depois tenta curl até 30 vezes.

### "Containers com error"
→ Veja os logs: `docker compose logs backend`

## 📝 Resumo da Arquitetura

```
┌─────────────────────────────────────────────┐
│          GitHub Actions (ubuntu-latest)      │
├─────────────────────────────────────────────┤
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │      Docker Compose Network            │  │
│  │  ┌──────────┐    ┌──────────┐         │  │
│  │  │ Backend  │◄──►│ Frontend │         │  │
│  │  │ :3000    │    │ :8080    │         │  │
│  │  └──────────┘    └──────────┘         │  │
│  │        ▲              ▲                 │  │
│  │        └──────┬───────┘                │  │
│  │               │                        │  │
│  │        ┌──────▼─────┐                  │  │
│  │        │   Cypress  │                  │  │
│  │        │   Testes   │                  │  │
│  │        └────────────┘                  │  │
│  └────────────────────────────────────────┘  │
│                   ▼                           │
│          Artifacts (Vídeos, Prints)          │
│                                              │
└─────────────────────────────────────────────┘
```

## 🎯 Próximos Passos

1. ✅ Faz push na branch main
2. ✅ GitHub Actions executa automaticamente
3. ✅ Testes rodam nos containers
4. ✅ Resultados salvos como artifacts
5. ✅ (Opcional) Imagens publicadas no Docker Hub

**Nenhum Docker precisa ser instalado na sua máquina!** 🎉

