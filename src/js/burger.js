const burgerBtn = document.querySelector(".burger-btn");
      const mobileMenu = document.querySelector(".mobile-menu");
      const closeBtn = document.querySelector(".close-btn");

      burgerBtn.addEventListener("click", () => {
        mobileMenu.classList.add("open");
      });

      closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });