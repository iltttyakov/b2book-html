if ($('.burger').length) {
  $('.burger').on('click', function () {
    $(this).toggleClass('burger--close');
    $('.menu').slideToggle('fast');
    $('body').toggleClass('body-overlay');

    if ($('.subheader').length) {
      $('.subheader').toggleClass('subheader--hide');
    }
  });
}

if ($('.header__show-search').length) {
  $('.header__show-search').on('click', function () {
    $('.search').slideToggle('fast');
    $('.recent').slideToggle('fast');
    $('body').toggleClass('body-overlay');

    if ($('.subheader').length) {
      $('.subheader').toggleClass('subheader--hide');
    }
  });
}

if ($('.search__cancel').length) {
  $('.search__cancel').on('click', function () {
    $('.search').slideToggle('fast');
    $('.recent').slideToggle('fast');
    $('body').toggleClass('body-overlay');

    if ($('.subheader').length) {
      $('.subheader').toggleClass('subheader--hide');
    }
  });
}

if ($('.recent__clear').length) {
  $('.recent__clear').on('click', function () {
    $('.recent__item').remove();
    $('.recent__count').text('(Пусто)');
  });
}

if ($('.map__full').length) {
  $('.map__full').on('click', function () {
    $(this).parent().toggleClass('map--open');
    $(this).toggleClass('map__full--open');
  });
}

if ($('.input__icon--clear').length) {
  $('.input__icon--clear').on('click', function () {
    $(this).parent().children('.input__field--with-clear').attr('value', '');
    $(this).parent().children('.input__field--with-clear').val('');
  });
}

if ($('.input__field--with-clear').length) {
  $('.input__field--with-clear').on('change', function () {
    this.setAttribute('value', this.value);
  });

  $('.input__field--with-clear').on('keyup ', function () {
    this.setAttribute('value', this.value);
  });
}

if ($('.filter__header').length) {
  $('.filter__header').on('click', function () {
    $(this).toggleClass('filter__header--open');
    $(this).parent().children('.filter__body').slideToggle();
  });
}

if ($(".filter__scroll-container").length) {
  $(".filter__scroll-container").niceScroll({
    cursorwidth: 5,
    cursoropacitymin: 0.4,
    cursorcolor: '#6e8cb6',
    cursorborder: 'none',
    cursorborderradius: 4,
    autohidemode: 'leave'
  });
}

if ($('.filter__scroll-more').length) {
  $('.filter__scroll-more').on('click', function () {
    if ($(this).hasClass('action-link--open')) {
      $(this).children('.action-link__text').text('Показать все');
    } else {
      $(this).children('.action-link__text').text('Свернуть');
    }
    $(this).toggleClass('action-link--open');
    $(this).parent().children('.filter__scroll-container').toggleClass('filter__scroll-container--open');
  });
}

if ($('.tooltip__call').length) {
  $('.tooltip__call').on('mouseover', function () {
    var tooltipCall = $(this);
    var tooltipBody = $('+ .tooltip__body', tooltipCall);

    tooltipBody.css({
      top: (tooltipCall.offset().top - $(window).scrollTop() - 40),
      left: tooltipCall.offset().left + Math.round(tooltipCall.outerWidth() - 88)
    });
  });
}

if ($('.checkbox__label').length) {
  $('.checkbox__label').on('click', function () {
    if ( $(this).parent().children('.checkbox__field').prop("checked") != true ) {

      $('.checkbox__show').removeClass('checkbox__show--active');
      $('.checkbox__show').removeClass('checkbox__show--hide');

      var tooltipCall = $(this).parent();
      var tooltipBody = $(tooltipCall).children('.checkbox__show');

      tooltipBody.css({
        top: (tooltipCall.offset().top - $(window).scrollTop() + 10),
        left: tooltipCall.offset().left + Math.round(tooltipCall.outerWidth() + 10)
      });

      $(tooltipBody).addClass('checkbox__show--active');

      setTimeout(function () {
        $(tooltipBody).addClass('checkbox__show--hide');
      }, 1000);

      setTimeout(function () {
        $(tooltipBody).removeClass('checkbox__show--active');
        $(tooltipBody).removeClass('checkbox__show--hide');
      }, 1500);
    }
  });
}

if ($('.filters').length) {
  if ($(window).width() <= 940) {
    $('.filters').slideToggle();
  }

  $('.catalog__open-filter').on('click', function () {
    $('.filters').slideToggle();
    $('body').toggleClass('body-overlay');
  });

  $('.filters__mobile-header-close').on('click', function () {
    $('.filters').slideToggle();
    $('body').toggleClass('body-overlay');
  });
}

if ('.filters__clear'.length) {
  $('.filters__clear').on('click', function () {
    $(this).closest('form')[0].reset();
    $(this).closest('form').find('input').each(function (index, element) {
      $(element).attr('value', '');
    });
  });
}

if ('.filters__reset'.length) {
  $('.filters__reset').on('click', function () {
    $(this).closest('form')[0].reset();
    $(this).closest('form').find('input').each(function (index, element) {
      $(element).attr('value', '');
    });
  });
}

window.Clipboard = (function(window, document, navigator) {
  var textArea,
    copy;

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement('textArea');
    textArea.value = text;
    textArea.readOnly = true;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range,
      selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyToClipboard() {
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  copy = function(text) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };

  return {
    copy: copy
  };
})(window, document, navigator);

if ($('.copy').length) {
  $('.copy').on('click', function (e) {
    e.preventDefault();

    Clipboard.copy($(this).data('info'));

    var copySpan = this;
    $(copySpan).toggleClass('copy--click');

    setTimeout(function () {
      $(copySpan).toggleClass('copy--click');
    }, 1000);
  });
}

if ($('.banking__copy').length) {
  $('.banking__copy').on('click', function (e) {
    e.preventDefault();

    Clipboard.copy($(this).data('info'));

    var copyelement = this;
    $(copyelement).toggleClass('banking__copy--click');
    setTimeout(function () {
      $(copyelement).toggleClass('banking__copy--click');
    }, 1000);
  })
}

$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: ($(_href).offset().top - 60) + "px"});
    return false;
  });
});

if ($('#login-modal-open').length) {
  $('#login-modal-open').on('click', function (e) {
    e.preventDefault();
    $('#login-modal').arcticmodal();
  });
}

if ($('#callback-modal-open').length) {
  $('#callback-modal-open').on('click', function (e) {
    e.preventDefault();
    $('#callback-modal').arcticmodal();
  });
}

if ($("input[name='radio-mode']").length) {
  $("input[name='radio-mode']").change(function () {
    if ($("input[value='register']").prop("checked")) {
      $('#form-register').show();
      $('#form-login').hide();
    } else {
      $('#form-register').hide();
      $('#form-login').show();
    }
  });
}

if ($('.subheader__link').length) {
  $('.subheader__link').on('click', function (e) {
    e.preventDefault();

    $('.company__card').hide();

    currentBlock = $(this).attr('href');
    $(currentBlock).show();
    $(currentBlock).addClass('company__card--open');

    $('.subheader__link').removeClass('subheader__link--active');
    $(this).addClass('subheader__link--active');

    companyFilterOn();
  });
}

function companyFilterOn() {
  $('.company__sidebar').addClass('company__filter-container');
  $('.company__body-bottom').addClass('company__filter-container');
  $('.company__body-column').addClass('company__filter-container');
  $('.company__body').addClass('company__filter-container');
}

if ($('.subheader__home').length) {
  $('.subheader__home').on('click', function (e) {
    e.preventDefault();
    $('.subheader__link').removeClass('subheader__link--active');

    $('.company__card').removeClass('company__card--open');
    $('.company__card').show();
    $(this).addClass('subheader__link--active');
    companyFilterOff();

    if ($(window).width() < 1320) {
      $('.company__card--desktop').hide();
    } else {
      $('.company__card--mobile').hide();
    }
  });
}

function companyFilterOff() {
  $('.company__sidebar').removeClass('company__filter-container');
  $('.company__body-bottom').removeClass('company__filter-container');
  $('.company__body-column').removeClass('company__filter-container');
  $('.company__body').removeClass('company__filter-container');
}

if ($('#chart').length) {

  (function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(["chartist"], function (Chartist) {
        return (root.returnExportsGlobal = factory(Chartist));
      });
    } else if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like enviroments that support module.exports,
      // like Node.
      module.exports = factory(require("chartist"));
    } else {
      root['Chartist.plugins.tooltips'] = factory(Chartist);
    }
  }(this, function (Chartist) {

    /**
     * Chartist.js plugin to display a data label on top of the points in a line chart.
     *
     */
    /* global Chartist */
    (function (window, document, Chartist) {
      'use strict';

      var defaultOptions = {
        currency: undefined,
        tooltipOffset: {
          x: 0,
          y: -20
        },
        appendToBody: false,
        class: undefined
        // showTooltips: true,
        // tooltipEvents: ['mousemove', 'touchstart', 'touchmove'],
        // labelClass: 'ct-label',
        // labelOffset: {
        //   x: 0,
        //   y: -10
        // },
        // textAnchor: 'middle'
      };

      Chartist.plugins = Chartist.plugins || {};
      Chartist.plugins.tooltip = function (options) {
        options = Chartist.extend({}, defaultOptions, options);

        return function tooltip(chart) {
          var tooltipSelector = 'ct-point';
          if (chart instanceof Chartist.Bar) {
            tooltipSelector = 'ct-bar';
          } else if (chart instanceof Chartist.Pie) {
            // Added support for donut graph
            if (chart.options.donut) {
              tooltipSelector = 'ct-slice-donut';
            } else {
              tooltipSelector = 'ct-slice-pie';
            }
          }

          var $chart = chart.container;
          var $toolTip = $chart.querySelector('.chartist-tooltip');
          if (!$toolTip) {
            $toolTip = document.createElement('div');
            $toolTip.className = (!options.class) ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;
            if (!options.appendToBody) {
              $chart.appendChild($toolTip);
            } else {
              document.body.appendChild($toolTip);
            }
          }
          var height = $toolTip.offsetHeight;
          var width = $toolTip.offsetWidth;

          hide($toolTip);

          function on(event, selector, callback) {
            $chart.addEventListener(event, function (e) {
              if (!selector || hasClass(e.target, selector))
                callback(e);
            });
          }

          on('mouseover', tooltipSelector, function (event) {
            var $point = event.target;
            var tooltipText = '';

            var meta = $point.getAttribute('ct:meta') || '';
            var value = $point.getAttribute('ct:value');

            if (options.tooltipFnc) {
              tooltipText = options.tooltipFnc(meta, value);
            } else {

              meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';
              value = '<span class="chartist-tooltip-value">' + value + '</span>';

              if (meta) {
                tooltipText += meta + '<br>';
              } else {
                // For Pie Charts also take the labels into account
                // Could add support for more charts here as well!
                if (chart instanceof Chartist.Pie) {
                  var label = next($point, 'ct-label');
                  if (label.length > 0) {
                    tooltipText += text(label) + '<br>';
                  }
                }
              }

              if (options.currency) {
                value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
              }
              tooltipText += value;
            }

            $toolTip.innerHTML = tooltipText;
            setPosition(event);
            show($toolTip);

            // Remember height and width to avoid wrong position in IE
            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          });

          on('mouseout', tooltipSelector, function () {
            hide($toolTip);
          });

          on('mousemove', null, function (event) {
            setPosition(event);
          });

          function setPosition(event) {
            // For some reasons, on FF, we can't rely on event.offsetX and event.offsetY,
            // that's why we prioritize event.layerX and event.layerY
            // see https://github.com/gionkunz/chartist-js/issues/381
            height = height || $toolTip.offsetHeight;
            width = width || $toolTip.offsetWidth;
            if (!options.appendToBody) {
              $toolTip.style.top = (event.layerY || event.offsetY) - height + options.tooltipOffset.y + 'px';
              $toolTip.style.left = (event.layerX || event.offsetX) - width / 2 + options.tooltipOffset.x + 'px';
            } else {
              $toolTip.style.top = event.pageY - height + options.tooltipOffset.y + 'px';
              $toolTip.style.left = event.pageX - width / 2 + options.tooltipOffset.x + 'px';
            }
          }
        }
      };

      function show(element) {
        element.classList.add('tooltip-show');
      }

      function hide(element) {
        element.classList.remove('tooltip-show');
      }

      function hasClass(element, className) {
        return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
      }

      function next(element, className) {
        do {
          element = element.nextSibling;
        } while (element && !hasClass(element, className));
        return element;
      }

      function text(element) {
        return element.innerText || element.textContent;
      }

    }(window, document, Chartist));

    return Chartist.plugins.tooltips;

  }));
// end tooltip plugin

  if ($(window).width() > 940) {
    var data = {
      labels: [
        '05.01',
        '06.01',
        '07.01',
        '08.01',
        '09.01',
        '10.01',
        '11.01',
        '12.01',
        '13.01',
        '14.01',
      ],
      series: [[
        30000,
        27000,
        16000,
        18000,
        30000,
        27000,
        16000,
        18000,
        16000,
        18000,
      ]],
    };
  } else {
    var data = {
      labels: [
        '05.01',
        '06.01',
        '07.01',
        '08.01',
      ],
      series: [[
        30000,
        27000,
        16000,
        18000,
      ]],
    };
  }

  new Chartist.Line('#chart', data, {
    low: 0,
    fullWidth: true,
    showArea: true,
    height: '355px',
    axisX: {
      showGrid: false,
      offset: 50
    },
    axisY: {
      labelInterpolationFnc: function (value, index) {
        return index % 4 === 0 ? value.toLocaleString() : null;
      },
      offset: 50
    },
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    plugins: [
      Chartist.plugins.tooltip()
    ],
  });
}


var currentBlock = '#main';

if ($('.subheader__link').length) {
  $('.subheader__link').on('click', function () {
    $(this).blur();
  });
}

if ($(window).width() < 1320 && $('.company').length) {
  var blocksId = [
    '#main',
    '#founders',
    '#reputation',
    '#changes',
    '#banking',
    '#details',
  ]

  $('.company').swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      var arrIndex = blocksId.indexOf(currentBlock);

      if (direction == 'left') {
        $('.company').addClass('company--swipe-left');

        setTimeout(function () {
          $('.company').removeClass('company--swipe-left');
          $('.company').addClass('company--swipe-right');
        }, 200);

        arrIndex++;
      } else if (direction == 'right') {
        $('.company').addClass('company--swipe-right');

        setTimeout(function () {
          $('.company').removeClass('company--swipe-right');
          $('.company').addClass('company--swipe-left');
        }, 200);
        arrIndex--;
      }

      if (arrIndex < 1 || arrIndex >= blocksId.length) {
        currentBlock = '#main';

        setTimeout(function () {
          $('.company__card').removeClass('company__card--open');
          $('.company__card').show();
          $('.company__card--desktop').hide();

          $('.subheader__link').removeClass('subheader__link--active');
          $('.subheader__link[href="' + currentBlock + '"]').addClass('subheader__link--active');

          companyFilterOff();

          $('.company').removeClass('company--swipe-left');
          $('.company').removeClass('company--swipe-right');
        }, 400);

      } else {
        currentBlock = blocksId[arrIndex];

        setTimeout(function () {
          $('.company__card').hide();
          $(currentBlock).show();
          $('.company__card--desktop').hide();
          $(currentBlock).addClass('company__card--open');
          companyFilterOn();

          $('.subheader__link').removeClass('subheader__link--active');
          $('.subheader__link[href="' + currentBlock + '"]').addClass('subheader__link--active');

          $('.company').removeClass('company--swipe-left');
          $('.company').removeClass('company--swipe-right');
        }, 400);

      }
    }
  });
}
