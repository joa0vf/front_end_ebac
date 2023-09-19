const form = document.getElementById('formValidar')
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

formEValido = false
function validaForm(campoA, campoB){
return campoB > campoA
}

form.addEventListener('submit', function(e){
   e.preventDefault();

   formEValido = validaForm(campoA.value, campoB.value);

   if (formEValido){
      alert("A validação foi um sucesso!")
   }
   else{
      alert("A validação está errada!")
   }
});
