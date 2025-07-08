const db = require('../database/models');

const classicCombinations = {
  Macchiato: ['Espresso', 'Leite', 'Espuma'],
  Latte: ['Espresso', 'Leite'],
  Mocha: ['Espresso', 'Leite', 'Chocolate'],
  Affogato: ['Sorvete', 'Espresso'],
};

function arraysIguais(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.sort().every((val, index) => val === arr2.sort()[index]);
}

async function identificarSabor(ingredientesBaseSelecionados = []) {
  const ingredientesCompletos = await db.BaseIngredient.findAll({
    where: { id: ingredientesBaseSelecionados },
  });

  const nomes = ingredientesCompletos.map((i) => i.name);

  for (const [nomeSabor, combinacao] of Object.entries(classicCombinations)) {
    if (arraysIguais(nomes, combinacao)) {
      const sabor = await db.ClassicFlavor.findOne({ where: { name: nomeSabor } });
      return { saborEncontrado: true, nome: sabor.name, id: sabor.id };
    }
  }

  return { saborEncontrado: false };
}

module.exports = { identificarSabor };