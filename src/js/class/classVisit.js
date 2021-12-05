import Input from "./classInput.js";
import Label from "./classLabel.js";
import Select from "./classSelect.js";
import Button from "./classButton.js";
import Modal from "./classModal.js";
import Element from "./classEL.js";

class Visit {
  constructor(handleChangePopup) {
    this.doctor = this.selectDoctor().create();
    this.createBtn = this.createButton().create();
    this.closeBtn = this.closeBtn().create();
    this.target = this.targetInput().create();
    this.description = this.descriptionInput().create();
    this.urgency = this.selectUrgency().create();
    this.name = this.nameInput().create();
    this.element = this.createModal().create();
    this.handleChangePopup = handleChangePopup;
  }
  render() {
    document.body.prepend(this.element);
    this.closeBtn.addEventListener("click", this.handleCloseClick.bind(this));
    this.createBtn.addEventListener("click", this.handleCreateClick.bind(this));
    this.doctor.addEventListener("change", this.handleChangeForm.bind(this));
  }

  handleChangeForm() {
    const select = this.doctor.querySelector("select");
    const value = select.value;
    this.handleChangePopup(value);
  }

  createModal() {
    return new Modal([
      this.doctor,
      this.name,
      this.urgency,
      this.target,
      this.description,
      this.createBtn,
      this.closeBtn,
    ]);
  }
  selectDoctor() {
    const selectDoctor = new Select(
      "select-doctor-card",
      '<option value="" selected disabled hidden>Choose doctor</option><option value="Dentist">Dentist</option><option value="Cardiologist">Cardiologist</option><option value="Therapist">Therapist</option>'
    );
    const renderedSelect = selectDoctor.create();


    return new Label(
      ["label", "d-block"],
      `Select doctor`,
      renderedSelect
    );

  }


  nameInput() {
    const nameInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Name`, nameInput.create());
  }
  selectUrgency() {
   const selectUrgency = new Select(
     "",
     '<option value="" selected disabled hidden>Choose urgency</option><select class="select" name="" id=""><option value="High">High</option><option value="">Normal</option><option value="">Low</option>'
   );
    return new Label(
      ["label", "d-block"],
      `Select urgency`,
      selectUrgency.create()
    );
  }

  
  targetInput() {
    const targetInput = new Input(["input"], "");
    return new Label(["label", "d-block"], `Target`, targetInput.create());
  }
  descriptionInput() {
    const descriptionInput = new Element();
    return new Label(
      ["label", "d-block"],
      `Descrition`,
      descriptionInput.createElement(
        "textarea",
        ["textarea"],
        {
          cols: "30",
          rows: "10",
        },
        ""
      )
    );
  }
  createButton() {
    return new Button(["button"], "create-button", "Create");
  }
  closeBtn() {
    return new Button(["close-button"], "close-button", "x");
  }
  handleCloseClick() {
    this.element.remove();
  }
  handleCreateClick() {
    console.log("hello");
  }
}

export default Visit;

