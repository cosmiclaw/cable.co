(() => {
  AOS.init();

  /*=============================================
  =            Mobile Menu Dropdown             =
  =============================================*/
  const menu_drop_down = document.querySelector(".mobile-menu-icon");
  const more_drop_donw = document.querySelector(".mobile-more-icon");

  menu_drop_down.addEventListener("click", (e) => {
    e.preventDefault();

    const hidden = e.target.parentElement.querySelector(".hidden");

    hidden.classList.toggle("active");
  });

  more_drop_donw.addEventListener("click", (e) => {
    e.preventDefault();

    const hidden = e.target.parentElement.querySelector(".hidden");

    hidden.classList.toggle("active");
  });

  /*=============================================
  =            More Button                      =
  =============================================*/
  const more_box_buttons = document.querySelectorAll(".boxes .box .more");
  const more_stats_buttons = document.querySelectorAll(".stats .wrapper .more");

  const toggle_hidden_text = (el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const hiddenElem = el.querySelector(".hidden");

      hiddenElem.classList.toggle("active");

      hiddenElem.addEventListener("click", (e) => {
        e.preventDefault();

        hiddenElem.classList.toggle("active");
      });
    });
  };

  more_box_buttons.forEach(toggle_hidden_text);
  more_stats_buttons.forEach(toggle_hidden_text);

  /*=============================================
  =            Popup                            =
  =============================================*/
  const box_content = document.querySelectorAll(".charts .boxes .box .content");
  const performers = document.querySelectorAll(
    ".charts .boxes .box .hidden-popup .performers-click"
  );
  const chart_view = document.querySelectorAll(
    ".charts .boxes .box .hidden-popup .chart_view_click"
  );

  const period_start = document.querySelectorAll(".period-start");

  const period_end = document.querySelectorAll(".period-end");

  period_start.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      elem.nextElementSibling.classList.toggle("show-calender");
    });
  });

  period_end.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      elem.nextElementSibling.classList.toggle("show-calender");
    });
  });

  box_content.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const popupEl = el.parentNode.querySelector(".hidden-popup");

      popupEl.classList.add("active");
    });

    const closeElems = el.parentNode.querySelectorAll(".title-bar > span");

    closeElems.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.parentNode.parentNode.classList.remove("active");
      });
    });
  });

  performers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.nextElementSibling.classList.toggle("active");
    });
  });

  chart_view.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.nextElementSibling.classList.toggle("show");
    });
  });

  /*=============================================
  =            DropDown                         =
  =============================================*/
  const first_dropdown = document.querySelector(".dropdown-item-01");
  const first_mobile_dropdown = document.querySelector(
    ".dropdown-mobile-item-01"
  );
  const first_progress_item = document.querySelector(".progress-item-01");

  const dropdown_buttons = document.querySelectorAll(".dropdown-button");

  first_dropdown.addEventListener("click", (e) => {
    e.preventDefault();

    const icons = e.target.parentNode.parentNode.querySelector(".icons");
    icons.classList.toggle("opened");

    first_progress_item.classList.toggle("active");
  });

  first_mobile_dropdown.addEventListener("click", (e) => {
    e.preventDefault();

    const icons = e.target.parentNode.parentNode.querySelector(".icons");
    icons.classList.toggle("opened");

    first_progress_item.classList.toggle("active");
  });

  dropdown_buttons.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      const icons = elem.parentElement.querySelector(".icons");

      const progress_elem =
        elem.parentElement.parentElement.querySelector(".progress_items");

      if (progress_elem) {
        progress_elem.classList.toggle("active");
      }

      icons.classList.toggle("opened");
    });
  });

  /*=============================================
  =            Progress Item                    =
  =============================================*/
  let styleSheet = null;
  const dynamicAnimation = (name, styles) => {
    if (!styleSheet) {
      styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      document.head.appendChild(styleSheet);
    }

    styleSheet.sheet.insertRule(
      `@keyframes ${name} {${styles}}`,
      styleSheet.length
    );
  };

  const progress_items = document.querySelectorAll(".progress-item .current");

  progress_items.forEach((elem, index) => {
    dynamicAnimation(
      `progress-anime-0${index}`,
      `from {width: 0%} to {width: ${elem.dataset.progress + "%"}}`
    );

    if (elem.dataset.progress) {
      elem.style.animation = `progress-anime-0${index} .5s ease-out`;
      elem.style.width = elem.dataset.progress + "%";
    }
  });

  /*=============================================
  =            Add More Model                   =
  =============================================*/
  const add_more_button = document.querySelector(".add-more");

  add_more_button.addEventListener("click", (e) => {
    e.preventDefault();

    const hidden = e.target.querySelector(".hidden");

    hidden.classList.add("active");

    const close_icon = hidden.querySelector(".close");

    close_icon.addEventListener("click", (e) => {
      e.preventDefault();

      hidden.classList.remove("active");
    });
  });

  /*=============================================
  =                 ZingChart                   =
  =============================================*/
  const configData = {
    graphset: [
      {
        type: "ring",
        backgroundColor: "transparent",
        plot: {
          valueBox: [
            {
              type: "all",
              text: "%npv%",
              placement: "out",
              fontSize: "10px",
              marginRight: "0px",
            },
          ],
          animation: {
            effect: "ANIMATION_EXPAND_VERTICAL",
            sequence: "ANIMATION_BY_PLOT_AND_NODE",
          },
          backgroundColor: "#FBFCFE",
          borderWidth: "0px",
          hoverState: {
            cursor: "hand",
          },
          slice: "60%",
        },
        plotarea: {
          margin: "70px 0px 10px 0px",
          backgroundColor: "transparent",
          borderRadius: "10px",
          borderWidth: "0px",
        },
        scaleR: {
          refAngle: 270,
        },
        series: [
          {
            text: "CERTIFICATIONS",
            values: [7.1],
            backgroundColor: "#067FA5",
            lineColor: "#067FA5",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#067FA5",
            },
          },
          {
            text: "WEBSITE",
            values: [9.6],
            backgroundColor: "#A000AE",
            lineColor: "#A000AE",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#A000AE",
            },
          },
          {
            text: "EXPO",
            values: [0.4],
            backgroundColor: "#EDA03D",
            lineColor: "#EDA03D",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#EDA03D",
            },
          },
          {
            text: "COURSES",
            values: [57.1],
            backgroundColor: "#AE0025",
            lineColor: "#AE0025",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#AE0025",
            },
          },
          {
            text: "CHAPTER",
            values: [24.8],
            backgroundColor: "#06487E",
            lineColor: "#06487E",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#06487E",
            },
          },
          {
            text: "VOLUNTEER",
            values: [1],
            backgroundColor: "#199680",
            lineColor: "#199680",
            lineWidth: "1px",
            marker: {
              backgroundColor: "#199680",
            },
          },
        ],
        noData: {
          alpha: 0.6,
          backgroundColor: "#20b2db",
          bold: true,
          fontSize: "18px",
          textAlpha: 0.9,
        },
      },
    ],
  };

  zingchart.render({
    id: "my-zingchart",
    height: "100%",
    width: "100%",
    data: configData,
  });

  /*=============================================
  =            Charts Start Animation           =
  =============================================*/

  // First Chart Animation

  const loader_inner = document.getElementById("send");
  const loader_outer = document.getElementById("recv");
  const loader_btn = document.getElementById("btn");

  let loader_inner_start = 0;
  let loader_outer_start = 0;
  let loader_value = 0;

  const current_loader_inner = loader_inner.getAttribute("value");
  const current_loader_outer = loader_outer.getAttribute("value");
  const current_loader_value = parseInt(loader_btn.innerText);

  const inner_interval = setInterval(() => {
    if (loader_inner_start >= current_loader_inner) {
      clearInterval(inner_interval);
    }

    loader_inner.setAttribute("value", loader_inner_start);
    loader_inner_start += 1;
  }, 30);

  const outer_interval = setInterval(() => {
    if (loader_outer_start >= current_loader_outer) {
      clearInterval(outer_interval);
    }

    loader_outer.setAttribute("value", loader_outer_start);
    loader_outer_start += 1;
  }, 20);

  const value_interval = setInterval(() => {
    if (loader_value >= current_loader_value) {
      clearInterval(value_interval);
    }

    loader_btn.innerText = loader_value;

    if (loader_value + 100 <= current_loader_value) {
      loader_value += 100;
    } else {
      loader_value += 1;
    }
  }, 10);

  // Third Chart Animation

  const third_chart_value = document.querySelector(".percentage__num3");
  const third_chart_current_value = parseInt(third_chart_value.innerText);

  let third_value = 0;
  const third_value_interval = setInterval(() => {
    if (third_value >= third_chart_current_value) {
      clearInterval(third_value_interval);
    }

    third_chart_value.innerText = third_value;
    third_value += 1;
  }, 20);

  // Fourth Chart Animation

  const fourth_chart_value = document.querySelector(".percentage__num2");
  const fourth_chart_current_value = parseInt(fourth_chart_value.innerText);

  let fourth_value = 0;
  const fourth_value_interval = setInterval(() => {
    if (fourth_value >= fourth_chart_current_value) {
      clearInterval(fourth_value_interval);
    }

    fourth_chart_value.innerText = fourth_value;
    fourth_value += 1;
  }, 10);

  const fourth_chart_progress = document.querySelector(
    ".fourth_chart .progress"
  );

  let fourth_progress = 0;
  const fourth_progress_interval = setInterval(() => {
    if (fourth_progress >= fourth_chart_current_value) {
      clearInterval(fourth_progress_interval);
    }

    fourth_chart_progress.style.background = `radial-gradient(closest-side, #3D4760 79%, transparent 80% 100%),
    conic-gradient(#44DACA ${fourth_progress}%, transparent 0)`;

    fourth_progress += 1;
  }, 20);

  /*=============================================
  =            Scroll Buttons                   =
  =============================================*/

  const scroll_button_up = document.querySelector(".scroll_buttons .up");
  const scroll_button_down = document.querySelector(".scroll_buttons .down");

  scroll_button_up.addEventListener("click", (e) => {
    e.preventDefault();

    const current_scroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    window.scrollTo(0, current_scroll - 500);
  });

  scroll_button_down.addEventListener("click", (e) => {
    e.preventDefault();

    const current_scroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    window.scrollTo(0, current_scroll + 500);
  });

  document.addEventListener("scroll", (e) => {
    e.preventDefault();

    var body = document.body,
      html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    if (window.scrollY <= 5) {
      scroll_button_up.classList.remove("active");
    } else {
      scroll_button_up.classList.add("active");
    }

    if (window.scrollY + 750 <= height) {
      scroll_button_down.classList.add("active");
    } else {
      scroll_button_down.classList.remove("active");
    }
  });
})();
