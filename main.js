!function(a){function t(){var t=a(".navbar-main .navbar-start").outerWidth()+a(".navbar-main .navbar-end").outerWidth();a(document).outerWidth()<t?a(".navbar-main .navbar-menu").addClass("is-flex-start"):a(".navbar-main .navbar-menu").removeClass("is-flex-start")}a('.article img:not(".not-gallery-item")').each(function(){0===a(this).parent("a").length&&(a(this).wrap('<a class="gallery-item" href="'+a(this).attr("src")+'"></a>'),this.alt&&a(this).after('<div class="has-text-centered is-size-6 has-text-grey caption">'+this.alt+"</div>"))}),"function"==typeof moment&&a(".article-meta time").each(function(){a(this).text(moment(a(this).attr("datetime")).fromNow())}),t(),a(window).resize(t);var e=a("#toc");if(0<e.length){var i=a("<div>");function n(){e.toggleClass("is-active"),i.toggleClass("is-active")}i.attr("id","toc-mask"),a("body").append(i),e.on("click",n),i.on("click",n),a(".navbar-main .catalogue").on("click",n)}}(jQuery);