function confirmRequirement(value = "") {
  var radio_ele = document.querySelector(
    'input[name="Project_Description__c"]:checked'
  );

  document.getElementById("Project_Description__c").value = radio_ele?.value;

  localStorage.setItem("Project_Description__c", radio_ele?.value);

  if (value.length > 0 || (radio_ele && radio_ele?.value?.length)) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "block";
    document.getElementById("edit-previous").style.display = "flex";
  }
}

window.onload = function () {
  var url = window.location.href;
  // To show selected radio value after reload
  let projectDescriptionValue = localStorage.getItem("Project_Description__c");

  var value1 = document.getElementById("option-1").value;
  var value2 = document.getElementById("option-2").value;
  var value3 = document.getElementById("option-3").value;
  var value4 = document.getElementById("option-4").value;
  var value5 = document.getElementById("option-5").value;

  if (projectDescriptionValue == value1) {
    document.getElementById("option-1").checked = true;
  }
  if (projectDescriptionValue == value2) {
    document.getElementById("option-2").checked = true;
  }
  if (projectDescriptionValue == value3) {
    document.getElementById("option-3").checked = true;
  }
  if (projectDescriptionValue == value4) {
    document.getElementById("option-4").checked = true;
  }
  if (projectDescriptionValue == value5) {
    document.getElementById("option-5").checked = true;
  }
  // To identify the current state and push back user to previous state
  if (url.includes("#1")) {
    let projectDescriptionValue = localStorage.getItem(
      "Project_Description__c"
    );
    confirmRequirement(projectDescriptionValue);
  }
};

function editPreviousButton() {
  var url = window.location.href;
  if (url.includes("#1")) {
    let projectDescriptionValue = localStorage.getItem(
      "Project_Description__c"
    );

    history.pushState("", document.title, window.location.pathname);

    document.getElementById("step-one-form-one").style.display = "block";
    document.getElementById("button-container").style.display = "block";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
  }

  var radio_ele = document.querySelector(
    'input[name="Project_Description__c"]:checked'
  );

  document.getElementById("Project_Description__c").value = radio_ele?.value;
  localStorage.setItem("Project_Description__c", radio_ele?.value);

  if (value.length > 0 || (radio_ele && radio_ele?.value?.length)) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "block";
    document.getElementById("edit-previous").style.display = "flex";
  }
}
function stepOneFormTwoOptions(id1, id2) {
  var a = document.getElementById(id1).innerHTML;
  var b = document.getElementById(id2).innerHTML;

  if (a.length > 0 && b.length > 0) {
    document.getElementById("Areas_to_be_Painted__c").value = b;
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "";
    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("edit-previous").style.display = "none";
  }
}

function handleHouseType(houseType) {
  document.getElementById("House_Type__c").value = houseType;
}
function handleSize(size) {
  document.getElementById("Room_Count__c").value = "Studio/" + size;
}
function handleSliderChange() {
  var areaValue = document.getElementById("slider").value;
  document.getElementById("Site_Size__c").value = areaValue;
  document.getElementById("range-value").innerHTML = areaValue + " " + " SQFT";
}
function handleSlider() {
  var wallSlider = document.getElementById("wall-slider").value;
  document.getElementById("Walls_Condition__c").value = wallSlider;
}
function confirmAreaSize() {
  var areaValue = document.getElementById("slider")?.value;
  var wallSlider = document.getElementById("wall-slider")?.value;
  if (areaValue.length > 0) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "block";
    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "block";
  }
}
function confirmWallCondition() {
  var wallSlider = document.getElementById("wall-slider").value;
  if (wallSlider?.length > 0) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "block";
    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "block";
  }
}
function shareProjectStartInfo() {
  var radio_ele = document.querySelector(
    'input[name="Painting_Timeline__c"]:checked'
  );
  document.getElementById("Painting_Timeline__c").value = radio_ele?.value;
  if (radio_ele && radio_ele?.value?.length) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "none";
    document.getElementById("step-one-form-six").style.display = "block";

    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "none";
    document.getElementById("button-confirm-requirements").style.display =
      "block";
  }
}
function confirmRequirements() {
  var checkBoxValue = document.querySelector(
    'input[name="Other_Details__c"]:checked'
  );
  document.getElementById("Other_Details__c").value = checkBoxValue?.value;

  if (checkBoxValue && checkBoxValue?.value?.length) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "none";
    document.getElementById("step-one-form-six").style.display = "none";
    document.getElementById("step-two-form-one").style.display = "block";

    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "none";
    document.getElementById("button-confirm-requirements").style.display =
      "none";
    document.getElementById("button-confirm-address").style.display = "block";
  }
}
function confirmAddress() {
  var address1 = document.querySelector('input[name="Address_Line_1__c"]');
  var address2 = document.querySelector('input[name="Address_Line_2__c"]');
  var city = document.querySelector('input[name="City__c"]');
  var state = document.querySelector('input[name="State__c"]');

  document.getElementById("Address_Line_1__c").value = address1?.value;
  document.getElementById("Address_Line_2__c").value = address2?.value;
  document.getElementById("City__c").value = city?.value;
  document.getElementById("State__c").value = state?.value;

  if (
    address1?.value?.length &&
    address2?.value?.length &&
    city?.value?.length &&
    state?.value?.length
  ) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "none";
    document.getElementById("step-one-form-six").style.display = "none";
    document.getElementById("step-two-form-one").style.display = "none";
    document.getElementById("step-two-form-two").style.display = "block";

    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "none";
    document.getElementById("button-confirm-requirements").style.display =
      "none";
    document.getElementById("button-confirm-address").style.display = "none";
    document.getElementById("button-confirm-call-back-details").style.display =
      "block";
  }
}

function stepTwoFormTwoOptions(id) {
  var a = document.getElementById(id).innerHTML;
  if (a.length > 0) {
    document.getElementById("Preferred_Mode_of_Communication__c").value = a;
  }
}
function confirmCallBackDetails() {
  let selectedValue = document.getElementById(
    "Preferred_Mode_of_Communication__c"
  ).value;

  if (selectedValue?.length) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "none";
    document.getElementById("step-one-form-six").style.display = "none";
    document.getElementById("step-two-form-one").style.display = "none";
    document.getElementById("step-two-form-two").style.display = "none";
    document.getElementById("step-two-form-three").style.display = "block";

    document.getElementById("button-container-id").style.display = "flex";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "none";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "none";
    document.getElementById("button-confirm-requirements").style.display =
      "none";
    document.getElementById("button-confirm-address").style.display = "none";
    document.getElementById("button-confirm-call-back-details").style.display =
      "none";
    document.getElementById("button-create-project").style.display = "block";
  }
}
function createProject() {
  var projectName = document.querySelector('input[name="Name_of_Project__c"]');

  document.getElementById("Name_of_Project__c").value = projectName?.value;

  if (projectName?.value?.length) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "none";
    document.getElementById("step-one-form-five").style.display = "none";
    document.getElementById("step-one-form-six").style.display = "none";
    document.getElementById("step-two-form-one").style.display = "none";
    document.getElementById("step-two-form-two").style.display = "none";
    document.getElementById("step-two-form-three").style.display = "none";
    document.getElementById("step-two-form-four").style.display = "block";

    document.getElementById("button-container-id").style.display = "flex";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "none";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "none";
    document.getElementById("button-share-project").style.display = "none";
    document.getElementById("button-confirm-requirements").style.display =
      "none";
    document.getElementById("button-confirm-address").style.display = "none";
    document.getElementById("button-confirm-call-back-details").style.display =
      "none";
    document.getElementById("button-create-project").style.display = "none";
    document.getElementById("button-view-my-projects").style.display = "block";
  }
}
