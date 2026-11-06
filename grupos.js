// PSS Vendas — grupos de produto e cadastro de embalagem (tela Produção).
// Este arquivo pode ser editado sem mexer no resto do app. Depois de editar, suba no GitHub junto com o sw.js (versão nova).

// 1) Cadastro de embalagem (planilha CADASTRO_PRODUTOS.xlsx, aba Matriz, 06/11/2026)
//    código do produto: [linha, caixa master, unidades (pães) por pacote, pacotes por caixa]
window.CAD_PROD = {
  '13578':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (L) - PAO DE HAMBURGUER BRIOCHE 480GRS
  '13582':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (L) - PAO DE HAMBURGUER GERGELIM 480GRS
  '13580':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (L) - PAO DE HAMBURGUER TRADICIONAL 480GRS
  '13579':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (R) - PAO DE HAMBURGUER BRIOCHE 480GRS
  '13583':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (R) - PAO DE HAMBURGUER GERGELIM 480GRS
  '13581':['Lanche','Caixa Papelão',6,8], // CRAFT BUN (R) - PAO DE HAMBURGUER TRADICIONAL 480GRS
  '13587':['Lanche','Caixa Papelão',6,6], // FORNOYA - PAO DE HAMBURGUER BRIOCHE 480GRS
  '13661':['Lanche','Caixa Papelão',6,9], // SCHIMIDT - PAO DE HAMBURGUER BRIOCHE 480GRS EMB TRANSPARENTE
  '13794':['Mercado','Plástico',4,12], // DELAMARIE - PAO DE HAMBURGUER GOURMET BRIOCHE 220 GRS
  '743':['Mercado','Plástico',4,12], // GOLD BOYS - PAO DE HAMBURGUER AUSTRALIANO 220 GRS
  '742':['Mercado','Plástico',4,12], // GOLD BOYS - PAO DE HAMBURGUER BRIOCHE 220 GRS
  '5182':['Mercado','Plástico',12,12], // PAO DE HAMBURGUER 1080G C/ 12 UND
  '193':['Mercado','Plástico',4,12], // PAO DE HAMBURGUER 220 GRS
  '5173':['Mercado','Plástico',4,12], // PAO DE HAMBURGUER 220G - ZELENA
  '484':['Mercado','Plástico',4,12], // PAO DE HAMBURGUER AUSTRALIANO 220 GRS
  '485':['Mercado','Plástico',4,12], // PAO DE HAMBURGUER BRIOCHE 220 GRS
  '7714':['Mercado','Plástico',6,12], // PAO DE HAMBURGUER C/ 6 UNIDADES GOURMET  - 500GRS
  '191':['Mercado','Plástico',4,12], // PAO DE HAMBURGUER COM GERGELIM 220 GRS
  '12842':['Mercado','Plástico',4,12], // PAO GUARANY - PAO DE HAMBURGUER BRIOCHE - 220G
  '12841':['Mercado','Plástico',6,12], // PAO GUARANY - PAO DE HAMBURGUER C/ 6 UNIDADES - 360GRS
  '9321':['Mercado','Plástico',4,12], // PRADO - PAO DE HAMBURGUER 220 GRS
  '6819':['Mercado','Plástico',4,12], // REAL SUPERMERCADOS - PAO DE HAMBURGUER 220 GRS
  '14387':['Lanche','Caixa Papelão',6,8], // CARFT BUN PAO HAMBURGUER GERGELIM ARO 9 300GRS EMB TRANSP
  '14390':['Lanche','Caixa Papelão',6,8], // CRAFT  BUN PAO HAMBURGUER GERGELIM ARO 12 480GRS EMB TRANSP
  '14544':['Lanche','Caixa Papelão',6,8], // CRAFT BUN - MINI PAO HAMBURGUER BRIOCHE 30GRS ARO 06 450GRS
  '14020':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO DE HAMBURGUER AUSTRALIANO - EMB TRANSP 480GRS
  '14021':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO DE HAMBURGUER GERGELIM ROYAL EMB TRANSP 480GRS
  '14527':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER BRIOCHE ARO 11 390GRS
  '14389':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER BRIOCHE ARO 12 480GRS EMB TRANSP
  '14386':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER BRIOCHE CRAFT 9 300GRS EMB TRANSPA
  '14528':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER GERGELIM ARO 11 390GRS
  '14529':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER TRADICIONAL ARO 11 390GRS
  '14388':['Lanche','Caixa Papelão',6,8], // CRAFT BUN PAO HAMBURGUER TRADICIONAL ARO 9 300GRS EMB TRANSP
  '13993':['Mercado','Plástico',4,12], // DELAMARIE - PAO DE HAMBURGUER 300 GRS
  '14570':['Mercado','Plástico',6,12], // PAO DE HAMBURGUER BRIOCHE 480GRS SR BURGUER
  '14569':['Mercado','Plástico',6,12], // PAO DE HAMBURGUER BRIOCHE C/ GERGELIM EMB TRANSP SR BURGUER
  '14419':['Mercado','Plástico',6,12], // PAO DE HAMBURGUER BRIOCHE C/GERGELIM ARO 9 300GRS
  '12843':['Mercado','Plástico',4,12], // PAO GUARANY - PAO DE HAMBURGUER COM GERGELIM - 220G
  '13961':['Lanche','Caixa Papelão',6,9], // SCHIMIDT - PAO DE HAMBURGUER AUSTRALIANO EMB TRANSPARENTE
  '14385':['Lanche','Caixa Papelão',6,9], // SCHIMIDT - PAO DE HAMBURGUER BRIOCHE ARO 9 300GRS
  '13965':['Lanche','Caixa Papelão',6,9], // SCHIMIDT - PAO DE HAMBURGUER BRIOCHE C/ GERGELIM EMB TRANSP
  '14277':['Lanche','Caixa Papelão',6,9], // SCHIMIDT - PAO DE HAMBURGUER C/ GERGELIM EMB TRANSP
};

// 2) Correções manuais de grupo: 'código do produto': 'Nome do grupo'  (vale mais que as regras abaixo)
window.GRUPO_MANUAL = {
};

// 3) Regras automáticas pelo nome do produto (a primeira que bater vale). Texto sem acento, em maiúsculas.
window.REGRAS_GRUPO = [
  [/HOT ?DOG|CACHORRO/, 'Pão de Hot Dog'],
  [/BOLO INGL/, 'Bolo Inglês'],
  [/\bBOLO|BOLINHO|CUPCAKE|MUFFIN/, 'Bolo'],
  [/BATATA/, 'Batata Frita'],
  [/PIZZA/, 'Massa de Pizza'],
  [/TORRADA/, 'Torrada'],
  [/FARINHA/, 'Farinha de Rosca'],
  [/BISNAG/, 'Bisnaguinha'],
  [/PANET|CHOCOTONE|COLOMBA/, 'Panetone'],
  [/PAO DE QUEIJO/, 'Pão de Queijo'],
  [/PAO DE ALHO/, 'Pão de Alho'],
  [/\bFORMA\b/, 'Pão de Forma'],
  [/SIRIO|ARABE|\bPITA\b|FOLHA/, 'Pão Sírio'],
  [/WRAP|TORTILHA|\bRAP ?10/, 'Wrap / Tortilha'],
  [/FRANCES/, 'Pão Francês'],
  [/BAGUET/, 'Baguete'],
  [/ITALIANO/, 'Pão Italiano'],
  [/ROSCA/, 'Rosca'],
  [/SONHO/, 'Sonho'],
  [/CROISSANT/, 'Croissant'],
  [/\bBROA/, 'Broa'],
  [/BISCOITO|COOKIE|BOLACHA/, 'Biscoito'],
  [/INTEGRAL|GRAOS|CENTEIO/, 'Pão de Forma'],
  [/PAO DE LEITE|\bLEITE\b/, 'Pão de Leite'],
  [/PAO DOCE|\bDOCE\b/, 'Pão Doce'],
  [/\bPAO\b/, 'Outros pães']
];
window.GRUPO_HAMB_LANCHE = 'Hambúrguer Linha Lanche';
window.GRUPO_HAMB_MERCADO = 'Hambúrguer Linha Mercado';
window.GRUPO_HAMB_SEM = 'Hambúrguer sem linha (conferir)';

// Devolve o grupo de um produto. Hambúrguer: pela coluna Linha do cadastro (Lanche / Mercado).
window.grupoProduto = function (nome, cod) {
  cod = String(cod == null ? '' : cod).trim();
  if (GRUPO_MANUAL[cod]) return GRUPO_MANUAL[cod];
  const cad = CAD_PROD[cod];
  if (cad) return /lanche/i.test(cad[0]) ? GRUPO_HAMB_LANCHE : GRUPO_HAMB_MERCADO;
  const n = String(nome || '').normalize('NFKD').replace(/[̀-ͯ]/g, '').toUpperCase();
  if (/HAMBURG|BURGU?ER|\bBUN\b/.test(n)) return GRUPO_HAMB_SEM;
  for (const [re, g] of REGRAS_GRUPO) if (re.test(n)) return g;
  return 'Outros';
};
