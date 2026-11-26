const form = document.getElementById("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");

const solutionsGroup = document.getElementById("solutions-group");
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");

function validateForm() {
  const checkedComplaints = complaintsGroup.querySelectorAll('input[type="checkbox"]:checked');
  const checkedSolution = solutionsGroup.querySelector('input[type="radio"]:checked');

  return {
    "full-name": fullName.value.trim() !== "",
    "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()),
    "order-no": /^2024\d{6}$/.test(orderNo.value.trim()),
    "product-code": /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(productCode.value.trim()),
    "quantity": /^[1-9]\d*$/.test(quantity.value.trim()),
    "complaints-group": checkedComplaints.length > 0,
    "complaint-description": !otherComplaint.checked || complaintDescription.value.length >= 20,
    "solutions-group": checkedSolution !== null,
    "solution-description": !otherSolution.checked || solutionDescription.value.length >= 20
  };
}

function isValid(validationObj) {
  return Object.values(validationObj).every(Boolean);
}

function updateBorderColor(element, valid) {
  element.style.borderColor = valid ? "green" : "red";
}

// Change listeners for individual text/number inputs
fullName.addEventListener("change", () => {
  updateBorderColor(fullName, validateForm()["full-name"]);
});

email.addEventListener("change", () => {
  updateBorderColor(email, validateForm()["email"]);
});

orderNo.addEventListener("change", () => {
  updateBorderColor(orderNo, validateForm()["order-no"]);
});

productCode.addEventListener("change", () => {
  updateBorderColor(productCode, validateForm()["product-code"]);
});

quantity.addEventListener("change", () => {
  updateBorderColor(quantity, validateForm()["quantity"]);
});

// Change listeners for checkbox and radio fieldsets (via event delegation)
complaintsGroup.addEventListener("change", () => {
  updateBorderColor(complaintsGroup, validateForm()["complaints-group"]);
});

solutionsGroup.addEventListener("change", () => {
  updateBorderColor(solutionsGroup, validateForm()["solutions-group"]);
});

// Change listeners for conditional textareas
complaintDescription.addEventListener("change", () => {
  updateBorderColor(complaintDescription, validateForm()["complaint-description"]);
});

solutionDescription.addEventListener("change", () => {
  updateBorderColor(solutionDescription, validateForm()["solution-description"]);
});

// Form submission validation
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const validationResults = validateForm();

  if (!isValid(validationResults)) {
    for (const [fieldId, valid] of Object.entries(validationResults)) {
      if (!valid) {
        const element = document.getElementById(fieldId);
        if (element) {
          element.style.borderColor = "red";
        }
      }
    }
  }
});
