// generate an image function
function generateImage() {
  const generateBtn = document.querySelector(".generateImage");
  const badgeHolder = document.querySelector(".badge-holder");
  const time = new Date().getTime();

  generateBtn.addEventListener("click", function () {
      const options = {
          scale: 10,
          format: "png"
      };

      // Update button text to indicate image generation is in progress
      generateBtn.innerHTML = "Generating...";

      html2canvas(badgeHolder, options).then((canvas) => {
          const imageDataURL = canvas.toDataURL("image/jpeg");

          // Create a download link for the image
          const a = document.createElement("a");
          a.href = imageDataURL;
          a.download = `eFeza_${time}.png`;
          a.click();

          // Reset button text after image generation is completed
          setTimeout(() => {
              generateBtn.innerHTML = '<span class="material-symbols-outlined">image</span> Download';
          }, 0);

          const msg = document.querySelector('.alert');
          msg.classList.remove('hide');
          msg.innerHTML = `eFeza_${time}.png was successfully downloaded!`;

          setTimeout(() => {
            document.querySelector('.preview').classList.add("hide");
            document.querySelector('.main').classList.remove("hide");
          }, 3000);

          setTimeout(() => {
            msg.classList.add('hide');
            clearForm();
          }, 8000);
      });


      function clearForm(){
        window.location.reload();
        let allInputs = document.querySelectorAll('input');
        allInputs.forEach(input => {
            input.value = '';
            if (input.type === 'file') {
                input.value = '';
            }
        });

      }

  });
}

generateImage();
