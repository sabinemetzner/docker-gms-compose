# 🐳 Configuração do Docker Hub (Bônus)

Este projeto está configurado para fazer **build e push automático** das imagens Docker no Docker Hub quando você fazer push na branch `main`.

## Como Configurar (3 passos)

### 1. Criar Conta no Docker Hub
1. Acesse https://hub.docker.com
2. Clique em "Sign Up" e crie uma conta
3. Confirme seu email

### 2. Gerar Token de Acesso
1. Faça login no Docker Hub
2. Vá para **Account Settings** → **Security**
3. Clique em **New Access Token**
4. Dê um nome: `github-actions`
5. Copie o token (você não conseguirá ver novamente)

### 3. Configurar GitHub Secrets
1. Vá para seu repositório no GitHub
2. Acesse **Settings** → **Secrets and variables** → **Actions**
3. Clique em **New repository secret**
4. Crie dois secrets:

| Nome | Valor |
|------|-------|
| `DOCKER_USERNAME` | Seu usuário do Docker Hub |
| `DOCKER_PASSWORD` | O token que você gerou |

## Pronto! 🎉

Agora quando você fazer push na `main`, o GitHub Actions vai:
1. ✅ Fazer build das imagens Docker
2. ✅ Executar os testes com docker-compose
3. ✅ Fazer push das imagens para Docker Hub (se os testes passarem)

## Verificar as Imagens no Docker Hub

Depois do primeiro push bem-sucedido, acesse:
- `https://hub.docker.com/r/seu-usuario/gms-backend`
- `https://hub.docker.com/r/seu-usuario/gms-frontend`
- `https://hub.docker.com/r/seu-usuario/gms-cypress`

## Usar as Imagens

Depois de publicadas, qualquer um pode usar:
```bash
docker pull seu-usuario/gms-backend:latest
docker pull seu-usuario/gms-frontend:latest
docker pull seu-usuario/gms-cypress:latest
```

## Sem Docker Localmente? Sem Problema! 💪

Todo o processo acontece automaticamente no GitHub Actions:
- ✅ Build das imagens
- ✅ Testes automatizados
- ✅ Push para Docker Hub
- ✅ Relatórios salvos como artifacts

Você não precisa instalar nada na sua máquina!
