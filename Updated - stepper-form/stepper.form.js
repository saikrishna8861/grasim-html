function localStorageRadioHandler(
  key1 = "",
  key2 = "",
  value1 = "",
  value2 = ""
) {
  localStorage.setItem(key1, value1);

  if (value2.length) {
    localStorage.setItem(key2, value2);
  }
}

function confirmRequirement(value = "") {
  var radio_ele = document.querySelector(
    'input[name="Project_Description__c"]:checked'
  );

  document.getElementById("Project_Description__c").value = radio_ele?.value;

  // localStorage.setItem("Project_Description__c", radio_ele?.value);

  if (value.length > 0 || (radio_ele && radio_ele?.value?.length)) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("button-container").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "block";
    document.getElementById("edit-previous").style.display = "flex";
  }
}

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

    var radio_ele = document.querySelector(
      'input[name="Project_Description__c"]:checked'
    );

    document.getElementById("Project_Description__c").value = radio_ele?.value;
    localStorage.setItem("Project_Description__c", radio_ele?.value);

    if (value.length > 0 || (radio_ele && radio_ele?.value?.length)) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("button-container").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "block";

      // document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "none";

      document.getElementById("step-one-form-four").style.display = "none";
      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "none";
      document.getElementById("step-two-form-one").style.display = "none";
      document.getElementById("step-two-form-two").style.display = "none";
      document.getElementById("edit-previous").style.display = "flex";
      document.getElementById("1").style.display = "block";
      document.getElementById("2").style.display = "none";
      document.getElementById("3").style.display = "none";
      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }

  if (url.includes("#2")) {
    let AreasToBePritedValue1 = localStorage.getItem("Areas_to_be_Painted__c1");
    let AreasToBePritedValue2 = localStorage.getItem("Areas_to_be_Painted__c2");

    var option1title = document.getElementById("op1-p-1")?.innerHTML;
    var option1subtitle = document.getElementById("op1-p-2")?.innerHTML;
    var option2title = document.getElementById("op2-p-1")?.innerHTML;
    var option2subtitle = document.getElementById("op2-p-2")?.innerHTML;
    var option3title = document.getElementById("op3-p-1")?.innerHTML;
    var option3subtitle = document.getElementById("op3-p-2")?.innerHTML;

    document.getElementById("option-one").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-one").style.color = "black";
    document.getElementById("option-two").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-two").style.color = "black";
    document.getElementById("option-three").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-three").style.color = "black";

    if (
      AreasToBePritedValue1 == option1title &&
      AreasToBePritedValue2 == option1subtitle
    ) {
      document.getElementById("option-one").style.backgroundColor = "grey";
      document.getElementById("option-one").style.color = "white";
      document.getElementById("option-one").style.border = "2px solid white";
    }

    if (
      AreasToBePritedValue1 == option2title &&
      AreasToBePritedValue2 == option2subtitle
    ) {
      document.getElementById("option-two").style.backgroundColor = "grey";
      document.getElementById("option-two").style.color = "white";
      document.getElementById("option-two").style.border = "2px solid white";
    }
    if (
      AreasToBePritedValue1 == option3title &&
      AreasToBePritedValue2 == option3subtitle
    ) {
      document.getElementById("option-three").style.backgroundColor = "grey";
      document.getElementById("option-three").style.color = "white";
      document.getElementById("option-three").style.border = "2px solid white";
    }
    history.pushState("#1", document.title, window.location.pathname);

    window.location.replace("#1");

    if (AreasToBePritedValue1.length > 0 && AreasToBePritedValue2.length > 0) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "block";
      document.getElementById("step-one-form-three").style.display = "none";

      document.getElementById("step-one-form-four").style.display = "none";
      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "none";
      document.getElementById("step-two-form-one").style.display = "none";
      document.getElementById("step-two-form-two").style.display = "none";
      document.getElementById("button-container-id").style.display = "";
      document.getElementById("cmp-previous").style.display = "none";
      document.getElementById("edit-previous").style.display = "flex";
      document.getElementById("button-container").style.display = "none";

      document.getElementById("2").style.display = "block";

      document.getElementById("3").style.display = "none";

      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
  if (url.includes("#3")) {
    let houseType = localStorage.getItem("House_Type__c");
    let roomCount = localStorage.getItem("Room_Count__c");
    let siteSizevalue = localStorage.getItem("Site_Size__c");

    history.pushState("#2", document.title, window.location.pathname);

    window.location.replace("#2");

    if (siteSizevalue.length > 0) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "block";
      document.getElementById("step-one-form-four").style.display = "none";

      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "none";
      document.getElementById("step-two-form-one").style.display = "none";
      document.getElementById("step-two-form-two").style.display = "none";

      document.getElementById("button-container-id").style.display = "none";
      document.getElementById("button-wall-condition").style.display = "none";
      document.getElementById("button-area-size").style.display = "block";
      document.getElementById("cmp-previous").style.display = "flex";
      document.getElementById("edit-previous").style.display = "none";
      // document.getElementById("1").style.display = "none";

      // document.getElementById("2").style.display = "none";

      document.getElementById("3").style.display = "block";

      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
  if (url.includes("#4")) {
    let wallCondition = localStorage.getItem("Walls_Condition__c");

    history.pushState("#3", document.title, window.location.pathname);

    window.location.replace("#3");

    if (wallCondition.length > 0) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "none";
      document.getElementById("step-one-form-four").style.display = "block";
      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "none";

      document.getElementById("step-two-form-one").style.display = "none";
      document.getElementById("step-two-form-two").style.display = "none";

      document.getElementById("button-container-id").style.display = "none";
      document.getElementById("edit-previous").style.display = "none";
      document.getElementById("cmp-previous").style.display = "flex";
      document.getElementById("button-area-size").style.display = "none";
      document.getElementById("button-wall-condition").style.display = "block";
      document.getElementById("button-share-project").style.display = "none";
      // document.getElementById("1").style.display = "none";

      // document.getElementById("2").style.display = "none";

      document.getElementById("3").style.display = "none";

      document.getElementById("4").style.display = "block";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
  if (url.includes("#5")) {
    let paintingTimelineValue = localStorage.getItem("Painting_Timeline__c");

    history.pushState("#4", document.title, window.location.pathname);

    window.location.replace("#4");

    if (paintingTimelineValue.length > 0) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "none";
      document.getElementById("step-one-form-four").style.display = "none";
      document.getElementById("step-one-form-five").style.display = "block";
      document.getElementById("step-one-form-six").style.display = "none";

      document.getElementById("step-two-form-one").style.display = "none";
      document.getElementById("step-two-form-two").style.display = "none";

      document.getElementById("button-container-id").style.display = "none";
      document.getElementById("edit-previous").style.display = "none";
      document.getElementById("cmp-previous").style.display = "flex";
      document.getElementById("button-area-size").style.display = "none";
      document.getElementById("button-wall-condition").style.display = "none";
      document.getElementById("button-share-project").style.display = "block";
      document.getElementById("button-confirm-requirements").style.display =
        "none";
      // document.getElementById("1").style.display = "none";

      // document.getElementById("2").style.display = "none";

      // document.getElementById("3").style.display = "none";
      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "block";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
  if (url.includes("#6")) {
    let otherDetailsValue = localStorage.getItem("Other_Details__c");

    history.pushState("#5", document.title, window.location.pathname);

    window.location.replace("#5");

    if (otherDetailsValue.length > 0) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "none";
      document.getElementById("step-one-form-four").style.display = "none";
      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "block";
      document.getElementById("step-two-form-one").style.display = "none";

      document.getElementById("step-two-form-two").style.display = "none";

      document.getElementById("button-container-id").style.display = "none";
      document.getElementById("edit-previous").style.display = "none";
      document.getElementById("cmp-previous").style.display = "flex";
      document.getElementById("button-area-size").style.display = "none";
      document.getElementById("button-wall-condition").style.display = "none";
      document.getElementById("button-share-project").style.display = "none";
      document.getElementById("button-confirm-requirements").style.display =
        "block";
      document.getElementById("button-confirm-address").style.display = "none";
      // document.getElementById("1").style.display = "none";

      // document.getElementById("2").style.display = "none";

      // document.getElementById("3").style.display = "none";

      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "block";
      document.getElementById("7").style.display = "none";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
  if (url.includes("#7")) {
    let address1 = localStorage.getItem("Address_Line_1__c");
    let address2 = localStorage.getItem("Address_Line_2__c");
    let state = localStorage.getItem("State__c");
    let city = localStorage.getItem("City__c");

    history.pushState("#6", document.title, window.location.pathname);

    window.location.replace("#6");

    if (address1.length && address2.length && state.length && city.length) {
      document.getElementById("step-one-form-one").style.display = "none";
      document.getElementById("step-one-form-two").style.display = "none";
      document.getElementById("step-one-form-three").style.display = "none";
      document.getElementById("step-one-form-four").style.display = "none";
      document.getElementById("step-one-form-five").style.display = "none";
      document.getElementById("step-one-form-six").style.display = "none";
      document.getElementById("step-two-form-one").style.display = "block";
      document.getElementById("step-two-form-two").style.display = "none";

      document.getElementById("button-container-id").style.display = "none";
      document.getElementById("edit-previous").style.display = "none";
      document.getElementById("cmp-previous").style.display = "flex";
      document.getElementById("button-area-size").style.display = "none";
      document.getElementById("button-wall-condition").style.display = "none";
      document.getElementById("button-share-project").style.display = "none";
      document.getElementById("button-confirm-requirements").style.display =
        "none";
      document.getElementById("button-confirm-address").style.display = "block";
      document.getElementById(
        "button-confirm-call-back-details"
      ).style.display = "none";
      // document.getElementById("1").style.display = "none";

      // document.getElementById("2").style.display = "none";

      // document.getElementById("3").style.display = "none";

      document.getElementById("4").style.display = "none";
      document.getElementById("5").style.display = "none";
      document.getElementById("6").style.display = "none";
      document.getElementById("7").style.display = "block";
      document.getElementById("8").style.display = "none";
      document.getElementById("9").style.display = "none";
    }
  }
}
function stepOneFormTwoOptions(id1 = "", id2 = "", value1 = "", value2 = "") {
  var a = document.getElementById(id1)?.innerHTML;
  var b = document.getElementById(id2)?.innerHTML;

  if (id1?.length && id2?.length) {
    localStorageRadioHandler(
      "Areas_to_be_Painted__c1",
      "Areas_to_be_Painted__c2",
      a,
      b
    );
  }

  if (
    (value1?.length > 0 && value2?.length > 0) ||
    (a?.length > 0 && b?.length > 0)
  ) {
    document.getElementById("Areas_to_be_Painted__c").value = b;
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "";
    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("edit-previous").style.display = "none";
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    document.getElementById("3").style.display = "block";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}
let prevId;
function handleOptions(id) {
  document.getElementById("option-s2f21").style.backgroundColor = "#f5f5f5";
  document.getElementById("option-s2f21").style.color = "black";
  document.getElementById("option-s2f22").style.backgroundColor = "#f5f5f5";
  document.getElementById("option-s2f22").style.color = "black";
  document.getElementById("option-s2f23").style.backgroundColor = "#f5f5f5";
  document.getElementById("option-s2f23").style.color = "black";
  if (id) {
    if (prevId) {
      document.getElementById(prevId).style.backgroundColor = "";
      document.getElementById(prevId).style.color = "";
      document.getElementById(prevId).style.border = "";
    }

    prevId = id;
    document.getElementById(id).style.backgroundColor = "grey";
    document.getElementById(id).style.color = "white";
    document.getElementById(id).style.border = "2px solid white";
  }
}

function handleHouseType(houseType) {
  document.getElementById("House_Type__c").value = houseType;
  localStorageRadioHandler("House_Type__c", "", houseType, "");
}

let prev;

function handleSize(size, id) {
  document.getElementById("Room_Count__c").value = "Studio/" + size;
  localStorageRadioHandler("Room_Count__c", "", size, "");

  if (id) {
    document.getElementById("Studio").style.display = "none";

    if (prev) {
      document.getElementById(prev).style.backgroundColor = "";
      document.getElementById(prev).style.backgroundColor = "";
      document.getElementById(prev).style.color = "";
      document.getElementById(prev).style.border = "";
    }
    prev = id;
    document.getElementById(id).style.backgroundColor = "#1f1f1f";
    document.getElementById(id).style.color = "white";
    document.getElementById(id).style.border = "2px solid white";
  }
}
function handleSliderChange() {
  var areaValue = document.getElementById("slider").value;
  document.getElementById("Site_Size__c").value = areaValue;
  document.getElementById("range-value").innerHTML = areaValue + " " + " SQFT";
  localStorageRadioHandler("Site_Size__c", "", areaValue, "");
}
function handleSlider() {
  var wallSlider = document.getElementById("wall-slider").value;
  document.getElementById("Walls_Condition__c").value = wallSlider;
  localStorageRadioHandler("Walls_Condition__c", "", wallSlider, "");
}
function confirmAreaSize(localAreaValue = "") {
  var areaValue = document.getElementById("slider")?.value;
  var wallSlider = document.getElementById("wall-slider")?.value;

  if (localAreaValue.length > 0 || areaValue.length > 0) {
    document.getElementById("step-one-form-one").style.display = "none";
    document.getElementById("step-one-form-two").style.display = "none";
    document.getElementById("step-one-form-three").style.display = "none";
    document.getElementById("step-one-form-four").style.display = "block";
    document.getElementById("button-container-id").style.display = "none";
    document.getElementById("edit-previous").style.display = "none";
    document.getElementById("cmp-previous").style.display = "flex";
    document.getElementById("button-area-size").style.display = "none";
    document.getElementById("button-wall-condition").style.display = "block";
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "block";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}
function confirmWallCondition(localWallSlider = "") {
  var wallSlider = document.getElementById("wall-slider").value;

  if (localWallSlider.length > 0 || wallSlider?.length > 0) {
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
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    // document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "block";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}
function shareProjectStartInfo(localCheckBox = "") {
  var radio_ele = document.querySelector(
    'input[name="Painting_Timeline__c"]:checked'
  );
  document.getElementById("Painting_Timeline__c").value = radio_ele?.value;
  if (localCheckBox.length > 0 || (radio_ele && radio_ele?.value?.length)) {
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
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    // document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "block";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}
function confirmRequirements(localCheckBoxValue = "") {
  var checkBoxValue = document.querySelector(
    'input[name="Other_Details__c"]:checked'
  );
  document.getElementById("Other_Details__c").value = checkBoxValue?.value;

  if (
    localCheckBoxValue.length > 0 ||
    (checkBoxValue && checkBoxValue?.value?.length)
  ) {
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
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "block";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}
function confirmAddress(
  localAddress1 = "",
  localAddress2 = "",
  localCity = "",
  localState = ""
) {
  var address1 = document.querySelector('input[name="Address_Line_1__c"]');
  var address2 = document.querySelector('input[name="Address_Line_2__c"]');
  var city = document.querySelector('input[name="City__c"]');
  var state = document.querySelector('input[name="State__c"]');

  document.getElementById("Address_Line_1__c").value = address1?.value;
  document.getElementById("Address_Line_2__c").value = address2?.value;
  document.getElementById("City__c").value = city?.value;
  document.getElementById("State__c").value = state?.value;
  localStorageRadioHandler("Address_Line_1__c", "", address1, "");
  localStorageRadioHandler("Address_Line_2__c", "", address2, "");
  localStorageRadioHandler("City__c", "", city, "");
  localStorageRadioHandler("State__c", "", state, "");

  if (
    (localState.length &&
      localCity.length &&
      localAddress1.length &&
      localAddress2.length) ||
    (address1?.value?.length &&
      address2?.value?.length &&
      city?.value?.length &&
      state?.value?.length)
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

    document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "block";
    document.getElementById("9").style.display = "none";
  }
}

function stepTwoFormTwoOptions(id) {
  var a = document.getElementById(id).innerHTML;
  if (a.length > 0) {
    document.getElementById("Preferred_Mode_of_Communication__c").value = a;
    localStorageRadioHandler("Preferred_Mode_of_Communication__c", "", a, "");
  }
}
function confirmCallBackDetails(localSelectedValue = "") {
  let selectedValue = document.getElementById(
    "Preferred_Mode_of_Communication__c"
  ).value;

  if (localSelectedValue.length || selectedValue?.length) {
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
    document.getElementById("button-container").style.display = "none";
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    // document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "none";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "block";
  }
}
function createProject(localProjectName = "") {
  var projectName = document.querySelector('input[name="Name_of_Project__c"]');

  document.getElementById("Name_of_Project__c").value = projectName?.value;
  localStorageRadioHandler("Name_of_Project__c", "", projectName?.value, "");

  if (localProjectName.length || projectName?.value?.length) {
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
    document.getElementById("button-container").style.display = "none";
    // document.getElementById("1").style.display = "none";

    // document.getElementById("2").style.display = "none";

    // document.getElementById("3").style.display = "none";

    document.getElementById("4").style.display = "none";
    document.getElementById("5").style.display = "none";
    document.getElementById("6").style.display = "block";
    document.getElementById("7").style.display = "none";
    document.getElementById("8").style.display = "none";
    document.getElementById("9").style.display = "none";
  }
}

function copyToClipboard() {
  // Get the text field
  var copyText = document.getElementById("myvalue");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
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

    let AreasToBePritedValue1 = localStorage.getItem("Areas_to_be_Painted__c1");
    let AreasToBePritedValue2 = localStorage.getItem("Areas_to_be_Painted__c2");

    var option1title = document.getElementById("op1-p-1")?.innerHTML;
    var option1subtitle = document.getElementById("op1-p-2")?.innerHTML;
    var option2title = document.getElementById("op2-p-1")?.innerHTML;
    var option2subtitle = document.getElementById("op2-p-2")?.innerHTML;
    var option3title = document.getElementById("op3-p-1")?.innerHTML;
    var option3subtitle = document.getElementById("op3-p-2")?.innerHTML;

    document.getElementById("option-one").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-one").style.color = "black";
    document.getElementById("option-two").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-two").style.color = "black";
    document.getElementById("option-three").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-three").style.color = "black";

    if (
      AreasToBePritedValue1 == option1title &&
      AreasToBePritedValue2 == option1subtitle
    ) {
      document.getElementById("option-one").style.backgroundColor = "grey";
      document.getElementById("option-one").style.color = "white";
      document.getElementById("option-one").style.border = "2px solid white";
    }

    if (
      AreasToBePritedValue1 == option2title &&
      AreasToBePritedValue2 == option2subtitle
    ) {
      document.getElementById("option-two").style.backgroundColor = "grey";
      document.getElementById("option-two").style.color = "white";
      document.getElementById("option-two").style.border = "2px solid white";
    }
    if (
      AreasToBePritedValue1 == option3title &&
      AreasToBePritedValue2 == option3subtitle
    ) {
      document.getElementById("option-three").style.backgroundColor = "grey";
      document.getElementById("option-three").style.color = "white";
      document.getElementById("option-three").style.border = "2px solid white";
    }
  }

  if (url.includes("#2")) {
    let AreasToBePritedValue1 = localStorage.getItem("Areas_to_be_Painted__c1");
    let AreasToBePritedValue2 = localStorage.getItem("Areas_to_be_Painted__c2");

    stepOneFormTwoOptions("", "", AreasToBePritedValue1, AreasToBePritedValue2);
  }

  if (url.includes("#3")) {
    let houseType = localStorage.getItem("House_Type__c");
    let roomCount = localStorage.getItem("Room_Count__c");
    let siteSizevalue = localStorage.getItem("Site_Size__c");

    confirmAreaSize(siteSizevalue);
  }
  if (url.includes("#4")) {
    let wallConditionValue = localStorage.getItem("Walls_Condition__c");

    confirmWallCondition(wallConditionValue);

    let PaintingTimelineValue = localStorage.getItem("Painting_Timeline__c");

    var value1 = document.getElementById("option1").value;
    var value2 = document.getElementById("option2").value;
    var value3 = document.getElementById("option3").value;

    if (PaintingTimelineValue == value1) {
      document.getElementById("option1").checked = true;
    }
    if (PaintingTimelineValue == value2) {
      document.getElementById("option2").checked = true;
    }
    if (PaintingTimelineValue == value3) {
      document.getElementById("option3").checked = true;
    }
  }
  if (url.includes("#5")) {
    let otherTypeValue = localStorage.getItem("Painting_Timeline__c");

    shareProjectStartInfo(otherTypeValue);

    let checkBoxValue = localStorage.getItem("Other_Details__c");

    var value1 = document.getElementById("checkbox-1").value;
    var value2 = document.getElementById("checkbox-2").value;
    var value3 = document.getElementById("checkbox-3").value;
    var value4 = document.getElementById("checkbox-4").value;
    if (checkBoxValue == value1) {
      document.getElementById("checkbox-1").checked = true;
    }
    if (checkBoxValue == value2) {
      document.getElementById("checkbox-2").checked = true;
    }
    if (checkBoxValue == value3) {
      document.getElementById("checkbox-3").checked = true;
    }
    if (checkBoxValue == value4) {
      document.getElementById("checkbox-4").checked = true;
    }
  }

  if (url.includes("#6")) {
    let checkBoxValue = localStorage.getItem("Other_Details__c");
    confirmRequirements(checkBoxValue);
  }
  if (url.includes("#7")) {
    let address1 = localStorage.getItem("Address_Line_1__c");
    let address2 = localStorage.getItem("Address_Line_2__c");
    let state = localStorage.getItem("State__c");
    let city = localStorage.getItem("City__c");

    confirmAddress(address1, address2, state, city);
    let Preferred_Mode_of_Communication__c = localStorage.getItem(
      "Preferred_Mode_of_Communication__c"
    );

    var option1title = document.getElementById("s2f2-op1-p-1")?.innerHTML;
    var option2title = document.getElementById("s2f2-op2-p-1")?.innerHTML;
    var option3title = document.getElementById("s2f2-op3-p-1")?.innerHTML;

    document.getElementById("option-s2f21").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-s2f21").style.color = "black";
    document.getElementById("option-s2f22").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-s2f22").style.color = "black";
    document.getElementById("option-s2f23").style.backgroundColor = "#f5f5f5";
    document.getElementById("option-s2f23").style.color = "black";

    if (Preferred_Mode_of_Communication__c == option1title) {
      document.getElementById("option-s2f21").style.backgroundColor = "grey";
      document.getElementById("option-s2f21").style.color = "white";
      document.getElementById("option-s2f21").style.border = "2px solid white";
    }

    if (Preferred_Mode_of_Communication__c == option2title) {
      document.getElementById("option-s2f22").style.backgroundColor = "grey";
      document.getElementById("option-s2f22").style.color = "white";
      document.getElementById("option-s2f22").style.border = "2px solid white";
    }
    if (Preferred_Mode_of_Communication__c == option3title) {
      document.getElementById("option-s2f23").style.backgroundColor = "grey";
      document.getElementById("option-s2f23").style.color = "white";
      document.getElementById("option-s2f23").style.border = "2px solid white";
    }
  }
  if (url.includes("#8")) {
    let modeOfCommunication = localStorage.getItem(
      "Preferred_Mode_of_Communication__c"
    );
    confirmCallBackDetails(modeOfCommunication);
  }
  if (url.includes("#9")) {
    let nameOfTheProject = localStorage.getItem("Name_of_Project__c");
    createProject(nameOfTheProject);
  }
};
