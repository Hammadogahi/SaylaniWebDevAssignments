const input = document.querySelector("input");

const digitBtns = (num) => {
  input.value += num;
};

const calc = () => {
  const result = eval(input.value);
  input.value = result;
};

const cls = () => {
  input.value = "";
};

const squared = () => {
  if (input.value === "") {
    alert("Please enter the value first!");
  } else {
    const inputInt = parseInt(input.value);
    const exp = Math.pow(inputInt, 2);
    input.value = exp;
  }
};

const half = () => {
  input.value /= 2;
};
