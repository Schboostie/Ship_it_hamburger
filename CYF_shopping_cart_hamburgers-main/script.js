var array, purchased, item, qp_array, dt_array, tt_array, ft_array, but1_array, but2_array, but3_array;


array = ['https://secure.img1-cg.wfcdn.com/im/77666093/resize-h445%5Ecompr-r85/6197/61970789/Wrapped+Canvas+Art+Prints.jpg', 'https://media.istockphoto.com/photos/double-cheese-burger-picture-id945057664?k=20', 'https://media.istockphoto.com/photos/delicious-hamburger-with-fire-flames-picture-id468676382?k=20'];
purchased = [];
qp_array = [];
dt_array = [];
ft_array = [];
tt_array = [];
but1_array = [];
but2_array = [];
but3_array = [];


document.getElementById('but1').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list2');
  purchased.push('Quater Pounder');
  let element_but1 = document.getElementById('but1');
  element_but1.style.color = '#ff0000';
  but1_array.push(1);
  let element_but1_array = document.getElementById('but1_array');
  element_but1_array.innerText = but1_array.reduce((a,b) => a+b, 0);

});

document.getElementById('but2').addEventListener('click', (event) => {
  let element_list22 = document.getElementById('list2');
  purchased.unshift('Double Trouble');
  let element_but2 = document.getElementById('but2');
  element_but2.style.color = '#ff0000';
  but2_array.push(1);
  let element_but2_array = document.getElementById('but2_array');
  element_but2_array.innerText = but2_array.reduce((a,b) => a+b, 0);

});

document.getElementById('but3').addEventListener('click', (event) => {
  let element_list23 = document.getElementById('list2');
  purchased.unshift('Flame Thrower');
  let element_but3 = document.getElementById('but3');
  element_but3.style.color = '#ff0000';
  but3_array.push(1);
  let element_but3_array = document.getElementById('but3_array');
  element_but3_array.innerText = but3_array.reduce((a,b) => a+b, 0);

});

document.getElementById('but4').addEventListener('click', (event) => {
  let element_qp = document.getElementById('qp');
  purchased.forEach((item) => {
    if (item == 'Quater Pounder') {
      qp_array.unshift(1);
      tt_array.unshift(1);
    }
    element_qp.innerText = qp_array.reduce((a,b) => a+b, 0);
  });

});

document.getElementById('but5').addEventListener('click', (event) => {
  let element_dt = document.getElementById('dt');
  purchased.forEach((item) => {
    if (item == 'Double Trouble') {
      dt_array.unshift(1);
      tt_array.unshift(1);
    }
    element_dt.innerText = dt_array.reduce((a,b) => a+b, 0);
  });

});

document.getElementById('but6').addEventListener('click', (event) => {
  let element_ft = document.getElementById('ft');
  purchased.forEach((item) => {
    if (item == 'Flame Thrower') {
      ft_array.unshift(1);
      tt_array.unshift(1);
    }
    element_ft.innerText = ft_array.reduce((a,b) => a+b, 0);
  });

});

document.getElementById('but7').addEventListener('click', (event) => {
  let element_tt = document.getElementById('tt');
  element_tt.innerText = tt_array.reduce((a,b) => a+b, 0);

});

document.getElementById('but8').addEventListener('click', (event) => {
  purchased = [];
  qp_array = [];
  let element_qp2 = document.getElementById('qp');
  element_qp2.replaceChildren();
  dt_array = [];
  let element_dt2 = document.getElementById('dt');
  element_dt2.replaceChildren();
  ft_array = [];
  let element_ft2 = document.getElementById('ft');
  element_ft2.replaceChildren();
  tt_array = [];
  let element_tt2 = document.getElementById('tt');
  element_tt2.replaceChildren();
  but1_array = [];
  let element_but1_array2 = document.getElementById('but1_array');
  element_but1_array2.replaceChildren();
  but2_array = [];
  let element_but2_array2 = document.getElementById('but2_array');
  element_but2_array2.replaceChildren();
  but3_array = [];
  let element_but3_array2 = document.getElementById('but3_array');
  element_but3_array2.replaceChildren();

});

 function myFunction(){
          let data = "";  let name = document.getElementById("userName").value
          let email = document.getElementById("userEmail").value
          let comment = document.getElementById("userComment").value
         
         data = "User name : "+name+"<br/>User email : "+email+ "<br/>User comment : "+comment
         
         document.getElementById("data").innerHTML = data  // display data to paragraph
         }