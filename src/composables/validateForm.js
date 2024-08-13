export default function validateForm(formRef) {
  const form = formRef.value;
  if (!form) return null;

  if (form.checkValidity()) {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    return formDataObject;
  } else {
    const firstInvalidField = form.querySelector(":invalid");
    if (firstInvalidField) {
      firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return null;
  }
}