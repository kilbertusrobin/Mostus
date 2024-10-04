export const fetchWordFromApi = async () => {
  try {
    const response = await fetch('https://trouve-mot.fr/api/random');
    const data = await response.json();
    let word = data[0].name
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    word = word.replace(/Œ/g, 'OE');

    return word;
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'API', error);
    return '';
  }
};