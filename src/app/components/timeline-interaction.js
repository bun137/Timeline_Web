// public/timeline-interactions.js
$(document).ready(function () {
    const steps = [
      '01-01-2023',
      '13-04-2023',
      '01-06-2023',
      '08-09-2023',
      '25-12-2023',
    ];
  
    const setActiveStep = (index) => {
      $(".step").removeClass("active");
      $(".step:lt(" + (index + 1) + ")").addClass("active");
      $(".section-content").removeClass("active");
      $(".section-content:eq(" + index + ")").addClass("active");
      $("#line-progress").css("width", `${((index + 1) / steps.length) * 100}%`);
    };
  
    $(".step").click(function () {
      const index = $(this).index();
      setActiveStep(index);
    });
  
    $(".step01").click(function () {
      setActiveStep(0);
    });
  
    $(".step02").click(function () {
      setActiveStep(1);
    });
  
    $(".step03").click(function () {
      setActiveStep(2);
    });
  
    $(".step04").click(function () {
      setActiveStep(3);
    });
  
    $(".step05").click(function () {
      setActiveStep(4);
    });
  });
  