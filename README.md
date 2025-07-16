# 🏠 Apartamento Botanique - Website Comercial

Website responsivo e otimizado para mobile para anunciar o apartamento do Edifício Botanique no Jardim Botânico, Curitiba.

## ✨ Características

- **Design Mobile-First**: 100% otimizado para dispositivos móveis
- **Slider Interativo**: Galeria de fotos com navegação suave
- **Lightbox**: Visualização ampliada das imagens
- **Botões de Contato**: WhatsApp, telefone e e-mail integrados
- **Animações Suaves**: Transições e efeitos visuais atrativos
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Carregamento rápido e otimizado

## 📱 Funcionalidades

### Seções Principais
1. **Header Fixo**: Logo e preço sempre visíveis
2. **Hero Slider**: 5 fotos principais com navegação
3. **Informações Rápidas**: Dados técnicos do imóvel
4. **Destaques**: Principais características do apartamento
5. **Galeria Completa**: Todas as 21 fotos do imóvel
6. **Localização**: Pontos turísticos e facilidades próximas
7. **Amenidades**: O que o condomínio oferece
8. **CTA Final**: Botões de contato destacados

### Interatividade
- Slider automático com controles manuais
- Lightbox para visualização das fotos
- Botões de contato funcionais
- Animações no scroll
- Barra de progresso de scroll
- Botão flutuante do WhatsApp

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador
2. **Teste em dispositivos móveis** para melhor experiência
3. **Clique nos botões de contato** para testar as funcionalidades
4. **Navegue pela galeria** clicando nas imagens

## 📁 Estrutura de Arquivos

```
botanique/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Este arquivo
├── ap1.jpg - ap21.jpg  # Fotos do apartamento
└── .git/               # Controle de versão
```

## 🎨 Design

### Cores Principais
- **Verde Principal**: #2c5530 (marca)
- **Verde Claro**: #4ade80 (destaques)
- **Azul**: #3b82f6 (botões secundários)
- **Branco**: #ffffff (fundo)
- **Cinza**: #f8fafc (seções alternadas)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 📊 Informações do Imóvel

### Dados Técnicos
- **Área Privativa**: ~80m²
- **Vagas Privativas**: 33m² (2 vagas cobertas)
- **Área Total**: 113m² (incluindo vagas)
- **Quartos**: 2 (1 suíte)
- **Vagas**: 2
- **Banheiros**: 2
- **Ano de Construção**: 2019
- **Preço**: R$ 729.000,00

### Condomínio
- **Fundo de Reserva**: R$ 90.000 em caixa para obras de melhoria, pintura e manutenção

#### Valores Fixos
- **Quota Mensal**: R$ 231,00
- **Fundo de Reserva**: R$ 23,10
- **Total Fixo**: R$ 254,10

#### Consumo - Última Fatura
- **Taxa de Água**: R$ 101,92
- **Gás - Consumo**: R$ 133,08
- **Total Variável**: R$ 235,00

#### Total Geral Mensal
- **Total**: R$ 489,10

### Localização
- **Endereço Exato**: Av. Prefeito Maurício Fruet, 1270
- **Bairro**: Jardim Botânico
- **Cidade**: Curitiba - PR
- **CEP**: 82900-010

### Pontos de Interesse Próximos
- **Jardim Botânico**: 700m (5 min a pé)
- **Shopping Palladium**: 2km (8 min de carro)
- **Hospital Universitário**: 1.5km (6 min de carro)
- **UFPR**: 2km (8 min de carro)
- **Terminal do Portão**: 1km (4 min de carro)
- **Jockey Plaza**: 3,2km (8 min de carro)
- **Centro da Cidade**: 4,8km (12 min de carro)
- **Hospital Cajuru**: 8,5km (15 min de carro)
- **Aeroporto Afonso Pena**: 15km (25 min de carro)

### Sobre a Região
O Jardim Botânico é um dos bairros mais sofisticados e desejados de Curitiba, oferecendo:
- Maior índice de área verde por habitante
- Excelente infraestrutura educacional
- Rede hospitalar de qualidade
- Comércio e lazer diversificados
- Qualidade de vida excepcional

### Destaques
- Vista para Serra do Mar
- 700m do Jardim Botânico
- Cozinha americana integrada
- Churrasqueira na sacada
- Academia no condomínio
- Móveis planejados
- **Melhor custo-benefício**: Um dos condomínios mais baratos de Curitiba
- **Portaria remota**: Sistema moderno de segurança

### Amenidades do Condomínio
- Elevador
- Academia
- Salão de Festas
- Terraço Coletivo
- **Portaria Remota** (sistema moderno)
- Garagem Coberta

### Dimensões dos Ambientes
- **Sala de Estar**: 20,52m²
- **Cozinha Americana**: 9,50m²
- **Suíte**: 12,65m²
- **Quarto 2**: 9,03m² (3,20m x 2,70m)
- **Sacada**: 8,07m²

### Sugestão de Layout - Quarto 2
- **Cama Queen**: 1,60m x 2,00m
- **Porta de entrada**: Posicionada estrategicamente
- **Janela**: Para ventilação natural
- **Guarda-roupa**: Espaço otimizado

## 🔧 Personalização

### Alterar Informações de Contato
Edite as funções no arquivo `script.js`:
```javascript
function openWhatsApp() {
    const phone = '5541999961121'; // Seu número
    const message = 'Sua mensagem personalizada';
    // ...
}
```

### Alterar Preço
Edite no arquivo `index.html`:
```html
<span class="price">R$ 729.000</span>
<span class="condo">Condomínio: R$ 355</span>
```

### Adicionar/Remover Fotos
1. Adicione as fotos na pasta
2. Atualize o array `galleryImages` no `script.js`
3. Adicione os elementos HTML correspondentes

## 📱 Responsividade

O website é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Otimizações

### Performance
- Imagens otimizadas
- CSS e JS minificados
- Lazy loading para galeria
- Animações otimizadas

### SEO
- Meta tags completas
- Estrutura semântica
- Alt text nas imagens
- URLs amigáveis

### Acessibilidade
- Navegação por teclado
- Focus states
- Contraste adequado
- Textos alternativos

## 📞 Contato

Para suporte ou personalizações:
- **WhatsApp**: (41) 99996-1121
- **E-mail**: vendas@axis21.com.br
- **Telefone**: (41) 3068-2121

## 📄 Licença

Este projeto foi criado para fins comerciais. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para maximizar conversões e proporcionar a melhor experiência mobile possível.** 