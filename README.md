# 🔐 Gerador de Senhas Fortes

Um gerador de senhas moderno, seguro e elegante com interface bilíngue (PT-BR/EN-GB) e tema claro/escuro.

![Badge](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Badge](https://img.shields.io/badge/status-completed-success.svg)
![Badge](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Sobre o Projeto

Este é um gerador de senhas web desenvolvido com HTML, CSS e JavaScript puro. O projeto foi criado com foco em segurança, usabilidade e design responsivo, oferecendo uma experiência agradável em qualquer dispositivo.

### ✨ Demonstração

```
🌐 Deploy: [Seu link aqui]
```

## 🚀 Funcionalidades

### Principais
- ✅ **Geração Segura** - Utiliza a Web Crypto API para máxima segurança
- ✅ **Personalização Completa** - Controle total sobre os caracteres incluídos
- ✅ **Comprimento Ajustável** - Senhas de 8 a 32 caracteres
- ✅ **Indicador de Força** - Feedback visual da segurança da senha
- ✅ **Copiar com Um Clique** - Função de cópia rápida para área de transferência

### Interface
- 🌍 **Bilíngue** - Interface em Português Brasileiro e Inglês Britânico
- 🎨 **Tema Duplo** - Modo claro (acinzentado) e escuro
- 📱 **100% Responsivo** - Otimizado para todos os dispositivos
- ⚡ **Performance** - Carregamento instantâneo, sem dependências externas

### Opções de Caracteres
- Letras maiúsculas (A-Z)
- Letras minúsculas (a-z)
- Números (0-9)
- Símbolos especiais (!@#$%^&*)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada com variáveis CSS
- **JavaScript ES6+** - Lógica e interatividade
- **Web Crypto API** - Geração segura de números aleatórios
- **Google Fonts** - Tipografia profissional (Inter)

## 📦 Como Usar

### Opção 1: Download Direto
1. Baixe o arquivo `index.html`
2. Abra o arquivo em qualquer navegador moderno
3. Pronto! Não precisa de servidor ou instalação

### Opção 2: Clone o Repositório
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gerador-senhas-fortes.git

# Entre no diretório
cd gerador-senhas-fortes

# Abra o arquivo no navegador
open index.html # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Opção 3: GitHub Pages
1. Faça fork do repositório
2. Ative o GitHub Pages nas configurações
3. Acesse via `https://seu-usuario.github.io/gerador-senhas-fortes`

## 🎯 Como Funciona

1. **Escolha o Comprimento** - Use o slider para definir entre 8-32 caracteres
2. **Selecione os Tipos** - Marque quais tipos de caracteres incluir
3. **Gere a Senha** - Clique no botão "Gerar Senha"
4. **Copie** - Use o botão copiar que aparece ao passar o mouse

## 🎨 Personalização

### Cores
As cores podem ser facilmente customizadas editando as variáveis CSS:

```css
:root {
    --primary: #3b82f6;
    --primary-hover: #2563eb;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
}
```

### Idiomas
Para adicionar novos idiomas, edite o objeto `translations`:

```javascript
const translations = {
    'seu-idioma': {
        title: 'Seu Título',
        // ... outras traduções
    }
}
```

## 📱 Responsividade

O projeto é otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Wide screens (1920px+)

## 🔒 Segurança

- Utiliza `crypto.getRandomValues()` para geração criptograficamente segura
- Não armazena senhas geradas
- Não faz requisições externas
- Código 100% client-side

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

### Ideias para Contribuição
- [ ] Adicionar mais opções de caracteres especiais
- [ ] Implementar histórico local (com opção de limpar)
- [ ] Adicionar mais idiomas
- [ ] Criar testes automatizados
- [ ] PWA support
- [ ] Atalhos de teclado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👏 Créditos

Desenvolvido com ❤️ por Thiago Freitas

### Agradecimentos
- Ícones de bandeiras em SVG inline
- Inspiração de design: Modern UI/UX principles
- Comunidade open source

---

<div align="center">

**[⬆ Voltar ao topo](#-gerador-de-senhas-fortes)**

</div>
