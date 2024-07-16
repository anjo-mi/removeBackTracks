function dirReduc(arr){
    for (let i = 0 ; i < arr.length -1 ; i++){
      if ((arr[i].toLowerCase() === 'north' && arr[i+1].toLowerCase() === 'south') || 
         (arr[i].toLowerCase() === 'south' && arr[i+1].toLowerCase() === 'north') || 
          (arr[i].toLowerCase() === 'east' && arr[i+1].toLowerCase() === 'west') || 
          (arr[i].toLowerCase() === 'west' && arr[i+1].toLowerCase() === 'east')){
        arr.splice(i,2)
        return dirReduc(arr)
      }
    }
    return arr
  }