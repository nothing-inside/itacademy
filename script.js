document.addEventListener('DOMContentLoaded', function() {

    let input = document.getElementById('number')
    let buttonEl = document.getElementById('button')
    let res = document.getElementById('result')
    buttonEl.addEventListener('click', function(){
      let arr = input.value.split(' ');
      let result = arr.reduce(function(sum, elem) {
        return Number(sum) + Number(elem);
      });
      console.log(arr);
      res.innerHTML = result;
    })
    
})
