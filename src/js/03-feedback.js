import throttle from 'lodash.throttle';
let currentFields = {
  email: '',
  message: '',
};
const KEY_FORM = 'feedback-form-state';
const refForm = document.querySelector('.feedback-form');
const currentFieldsFromStorage = localStorage.getItem(KEY_FORM);

if (currentFieldsFromStorage) {
  try {
    currentFields = JSON.parse(currentFieldsFromStorage);
  } catch (error) {
    // console.log(error.name);
    // console.log(error.message);
  }
}

initialFormData(currentFields);

function initialFormData(objData) {
  for (let key in objData) {
    if (objData[key] && refForm[key]) {
      refForm[key].value = objData[key];
      // console.log(refForm[key]);
    }
  }
}

refForm.addEventListener(
  'input',
  throttle(e => {
    currentFields[e.target.name] = e.target.value;
    localStorage.setItem(KEY_FORM, JSON.stringify(currentFields));
  }, 500)
);

refForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const { elements: { email, message },
    } = e.currentTarget;
    // console.log('this', email);

  if (email.value === '' || message.value === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Email: ${email.value} \nMessage: ${message.value}`);
  e.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
}
