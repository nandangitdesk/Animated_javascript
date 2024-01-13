const containers = document.querySelectorAll(".input-container");
const form = document.querySelector("form");

const tl = gsap.timeline({ defaults: { duration: 1 } });

//line
const start =
  "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";

const end =
  "M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512";

//elastic-line

containers.forEach((container) => {
  const input = container.querySelector(".input");
  const line = container.querySelector(".elastic-line");
  const placeholder = container.querySelector(".placeholder");

  input.addEventListener("focus", () => {
    if (!input.value) {
      tl.fromTo(
        line,
        { attr: { d: start } },
        { attr: { d: end, duration: 0.75, ease: "Power2.easeOut" } }
      );
    }
    tl.to(line, { attr: { d: start }, ease: "elastic.out(3,0.5)" }, "<50%");

    //placeholder shift
    tl.to(
      placeholder,
      { top: -15, left: 0, duration: 0.5, scale: 0.7, ease: "Power2.easeOut" },
      "<15%"
    );
  });
});

//revert inputs

form.addEventListener("click", () => {
  containers.forEach((container) => {
    const input = container.querySelector(".input");
    const line = container.querySelector(".elastic-line");
    const placeholder = container.querySelector(".placeholder");

    if (document.activeElement !== input) {
      if (!input.value) {
        gsap.to(placeholder, {
          top: 0,
          left: 0,
          scale: 1,
          duration: 0.5,
          ease: "Power2.easeOut",
        });
      }
    }

    // validate our form
    //   .
    //   .
    //   v
    //name validation
    input.addEventListener("input", (e) => {
      if (e.target.type === "text") {
        let inputText = e.target.value;
        if (inputText.length > 2) {
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }
      }
      //validate email

      if (e.target.type === "email") {
        let vaildemail = validateEmail(e.target.value);
        if (vaildemail) {
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }
      }
      //validate phone

      if (e.target.type === "tel") {
        let vaildemail = validatePhone(e.target.value);
        if (vaildemail) {
          colorize("#6391e8", line, placeholder);
        } else {
          colorize("#FE8C99", line, placeholder);
        }
      }
    });
  });
});

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(phone) {
  let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phone);
}

function colorize(color, line, placeholder) {
  gsap.to(line, { stroke: color, duration: 0.75 });
  gsap.to(placeholder, { color: color, duration: 0.74 });
}


const checkbox= document.querySelector(".checkbox")
const tl2=gsap.timeline({defaults:{duration:0.5, ease: "Power2.easeOut"}})


const tickMarkPath = document.querySelector(".tick-mark path");
const pathLength = tickMarkPath.getTotalLength();
gsap.set(tickMarkPath,{strokeDashoffset:pathLength,strokeDasharray:pathLength,})

checkbox.addEventListener("click",()=>{
  if (checkbox.checked) {
    tl2.to(".checkbox-fill",{top:0})
    tl2.fromTo(tickMarkPath,{strokeDashoffset:pathLength},{strokeDashoffset:0},"<50%")
    tl2.to(".checkbox-label",{color:"#6391e8"},"<")
  }else{
    tl2.to(".checkbox-fill",{top:100})
    tl2.fromTo(tickMarkPath,{strokeDashoffset:0},{strokeDashoffset:pathLength},"<50%")
    tl2.to(".checkbox-label",{color:"#c4c4c4"},"<")
  }

})