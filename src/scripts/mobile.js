(() => {
  const mobile_mini_boxes = document.querySelectorAll(
    ".mobile-boxes .box .mini"
  );
  const mobile_max_close_icon = document.querySelectorAll(
    ".mobile-boxes .box .max .upper-first-arrow"
  );

  const mobile_performers = document.querySelectorAll(
    ".mobile-boxes .box .max .hidden-popup .performers-click"
  );

  const mobile_chart_view = document.querySelectorAll(
    ".mobile-boxes .box .max .hidden-popup .chart_view_click"
  );

  const mobile_chart_content = document.querySelectorAll(
    ".mobile-boxes .box .max .content"
  );

  mobile_mini_boxes.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      mobile_max_close_icon.forEach((elem) => {
        const element = elem.parentElement.parentElement.parentElement;
        const mini = element.querySelector(".mini");
        const max = element.querySelector(".max");

        mini.classList.remove("no-display");
        max.classList.add("no-display");
      });

      elem.classList.add("no-display");
      elem.parentElement.querySelector(".max").classList.remove("no-display");
    });
  });

  mobile_max_close_icon.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      mobile_max_close_icon.forEach((elem) => {
        const element = elem.parentElement.parentElement.parentElement;
        const mini = element.querySelector(".mini");
        const max = element.querySelector(".max");

        mini.classList.remove("no-display");
        max.classList.add("no-display");
      });

      e.target.parentElement.parentElement.classList.add("no-display");

      e.target.parentElement.parentElement.parentElement
        .querySelector(".mini")
        .classList.remove("no-display");
    });
  });

  mobile_performers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.nextElementSibling.classList.toggle("active");
    });
  });

  mobile_chart_view.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      e.target.nextElementSibling.classList.toggle("no-display");
    });
  });

  mobile_chart_content.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();

      const hidden_popup =
        e.target.parentElement.parentElement.parentElement.querySelector(
          ".hidden-popup"
        );
      hidden_popup.classList.toggle("no-display");
    });
  });

  /*=============================================
  =            ZingChart                        =
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
    id: "mobile-zingchart",
    height: "100%",
    width: "100%",
    data: configData,
  });
})();
