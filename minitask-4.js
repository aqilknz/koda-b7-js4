function kategoriTipeData(data) {
  let result = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    array: 0,
  };

  let i = 0;
  while (i < data.length) {
    let item = data[i];
    if (Array.isArray(item)) {
      result.array++;
    } else if (item instanceof Object && item !== null) {
      result.object++;
    } else {
      switch (typeof item) {
        case 'number':
          result.number++;
          break;
        case 'string':
          result.string++;
          break;
        case 'boolean':
          result.boolean++;
          break;
      }
    }
    i++;
  }
  console.log('Number  :', result.number);
  console.log('String  :', result.string);
  console.log('Boolean :', result.boolean);
  console.log('Object  :', result.object);
  console.log('Array   :', result.array);
}

let data = [8, 'aqil', false, { nama: 'ahmad' },[4, 5, 6], false, 22, { umur: 21 }];

kategoriTipeData(data);
