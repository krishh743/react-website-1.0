import React, { useRef, useEffect } from 'react';
import KTStepper from 'kt-stepper'; // Assuming you have imported KTStepper library

const StepperComponent = () => {
  const stepperRef = useRef(null);

  useEffect(() => {
    const stepperElement = stepperRef.current;

    // Initialize Stepper
    const stepper = new KTStepper(stepperElement);

    // Handle next step
    const handleNextStep = () => {
      stepper.goNext(); // Go to the next step
      handleScroll();
    };

    // Handle previous step
    const handlePreviousStep = () => {
      stepper.goPrevious(); // Go to the previous step
      handleScroll();
    };

    // Handle scrolling
    const handleScroll = () => {
      const mainContainer = document.querySelector('.flex-row-fluid');
      mainContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Attach event listeners
    stepper.on("kt.stepper.next", handleNextStep);
    stepper.on("kt.stepper.previous", handlePreviousStep);

    return () => {
      // Cleanup event listeners
      stepper.off("kt.stepper.next", handleNextStep);
      stepper.off("kt.stepper.previous", handlePreviousStep);
    };
  }, []);

  return (
    <div className="stepper stepper-pills stepper-column d-flex flex-column flex-lg-row" id="kt_stepper_example_vertical">
      {/* Stepper Navigation */}
      <div className="d-flex flex-row-auto w-100 w-lg-300px">
        {/* Stepper Nav */}
        <div className="stepper-nav flex-center" ref={stepperRef}>
          {/* Step 1 */}
          <div className="stepper-item me-5 current" data-kt-stepper-element="nav">
            {/* Step Icon */}
            <div className="stepper-wrapper d-flex align-items-center">
              <div className="stepper-icon w-40px h-40px">
                <i className="stepper-check fas fa-check"></i>
                <span className="stepper-number">1</span>
              </div>
              {/* Step Label */}
              <div className="stepper-label">
                <h3 className="stepper-title">Step 1</h3>
                <div className="stepper-desc">Description</div>
              </div>
            </div>
            <div className="stepper-line h-40px"></div>
          </div>
          {/* Step 2 */}
          <div className="stepper-item me-5" data-kt-stepper-element="nav">
            {/* Step Icon */}
            <div className="stepper-wrapper d-flex align-items-center">
              <div className="stepper-icon w-40px h-40px">
                <i className="stepper-check fas fa-check"></i>
                <span className="stepper-number">2</span>
              </div>
              {/* Step Label */}
              <div className="stepper-label">
                <h3 className="stepper-title">Step 2</h3>
                <div className="stepper-desc">Description</div>
              </div>
            </div>
            <div className="stepper-line h-40px"></div>
          </div>
          {/* Step 3 */}
          <div className="stepper-item me-5" data-kt-stepper-element="nav">
            {/* Step Icon */}
            <div className="stepper-wrapper d-flex align-items-center">
              <div className="stepper-icon w-40px h-40px">
                <i className="stepper-check fas fa-check"></i>
                <span className="stepper-number">3</span>
              </div>
              {/* Step Label */}
              <div className="stepper-label">
                <h3 className="stepper-title">Step 3</h3>
                <div className="stepper-desc">Description</div>
              </div>
            </div>
            <div className="stepper-line h-40px"></div>
          </div>
          {/* Step 4 */}
          <div className="stepper-item me-5" data-kt-stepper-element="nav">
            {/* Step Icon */}
            <div className="stepper-wrapper d-flex align-items-center">
              <div className="stepper-icon w-40px h-40px">
                <i className="stepper-check fas fa-check"></i>
                <span className="stepper-number">4</span>
              </div>
              {/* Step Label */}
              <div className="stepper-label">
                <h3 className="stepper-title">Step 4</h3>
                <div className="stepper-desc">Description</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper Content */}
      <div className="flex-row-fluid">
        {/* Form */}
        <form className="form w-lg-500px mx-auto" noValidate="noValidate">
          {/* Group */}
          <div className="mb-5">
            {/* Step 1 Content */}
            <div className="flex-column current" data-kt-stepper-element="content">
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 1</label>
                <input type="text" className="form-control form-control-solid" name="input1" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 2</label>
                <input type="text" className="form-control form-control-solid" name="input2" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 3</label>
                <label className="form-check form-switch form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" checked="checked" value="1" />
                  <span className="form-check-label">Switch</span>
                </label>
              </div>
            </div>
            {/* Step 2 Content */}
            <div className="flex-column" data-kt-stepper-element="content">
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 1</label>
                <input type="text" className="form-control form-control-solid" name="input1" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 2</label>
                <textarea className="form-control form-control-solid" rows="3" name="input2" placeholder=""></textarea>
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Example Label 3</label>
                <label className="form-check form-check-custom form-check-solid">
                  <input className="form-check-input" checked="checked" type="checkbox" value="1" />
                  <span className="form-check-label">Checkbox</span>
                </label>
              </div>
            </div>
            {/* Step 3 Content */}
            <div className="flex-column" data-kt-stepper-element="content">
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Input 1</label>
                <input type="text" className="form-control form-control-solid" name="input1" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Input 2</label>
                <input type="text" className="form-control form-control-solid" name="input2" placeholder="" value="" />
              </div>
            </div>
            {/* Step 4 Content */}
            <div className="flex-column" data-kt-stepper-element="content">
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Input 1</label>
                <input type="text" className="form-control form-control-solid" name="input1" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Input 2</label>
                <input type="text" className="form-control form-control-solid" name="input2" placeholder="" value="" />
              </div>
              {/* Input group */}
              <div className="fv-row mb-10">
                <label className="form-label">Input 3</label>
                <input type="text" className="form-control form-control-solid" name="input3" placeholder="" value="" />
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="d-flex flex-stack">
            {/* Wrapper */}
            <div className="me-2">
              <button type="button" className="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous">
                Back
              </button>
            </div>
            {/* Wrapper */}
            <div>
              <button type="button" className="btn btn-primary" data-kt-stepper-action="submit">
                <span className="indicator-label">Submit</span>
                <span className="indicator-progress">Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>
              <button type="button" className="btn btn-primary" data-kt-stepper-action="next">
                Continue
              </button>
            </div>
          </div>
          {/* Actions */}
        </form>
        {/* Form */}
      </div>
    </div>
  );
};

export default StepperComponent;
