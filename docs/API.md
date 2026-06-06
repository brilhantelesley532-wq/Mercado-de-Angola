# 📚 Documentação da API - Mercado de Angola

## Base URL

```
http://localhost:5000/api
```

## Autenticação

```
Authorization: Bearer {token}
```

## Endpoints Principais

### Auth
- `POST /auth/register` - Criar conta
- `POST /auth/login` - Fazer login
- `POST /auth/forgot-password` - Recuperar senha

### Ads
- `GET /ads` - Listar anúncios
- `POST /ads` - Criar anúncio
- `GET /ads/:id` - Detalhes
- `PUT /ads/:id` - Atualizar
- `DELETE /ads/:id` - Deletar
- `POST /ads/:id/mark-sold` - Marcar como vendido

### Categories
- `GET /categories` - Listar todas

### Users
- `GET /users/:id` - Perfil
- `PUT /users/:id` - Atualizar
- `POST /users/:id/verify` - Enviar verificação

### Admin
- `GET /admin/dashboard` - Dashboard
- `GET /admin/users` - Listar usuários
- `GET /admin/reports` - Listar denúncias
- `GET /admin/payments` - Pagamentos
- `GET /admin/stats` - Estatísticas

### Moderator
- `GET /moderator/dashboard` - Dashboard
- `GET /moderator/reports` - Denúncias
- `POST /moderator/ads/:id/hide` - Ocultar anúncio

### Chat
- `GET /chat/conversations` - Conversas
- `POST /chat/messages` - Enviar mensagem

### Payments
- `POST /payments/create` - Criar pagamento
- `POST /payments/verify` - Verificar
- `GET /payments/history` - Histórico
