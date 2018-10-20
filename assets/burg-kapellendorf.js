'use strict';



;define('burg-kapellendorf/adapters/application', ['exports', 'ember-data', 'ember-inflector'], function (exports, _emberData, _emberInflector) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.RESTAdapter.extend({
        urlForFindAll: function urlForFindAll(modelName /*, snapshot*/) {
            var baseUrl = this.buildURL();
            return baseUrl + '/rest/' + (0, _emberInflector.pluralize)(modelName) + '.json';
        },
        urlForFindRecord: function urlForFindRecord(id, modelName /*, snapshot*/) {
            var baseUrl = this.buildURL();
            return baseUrl + '/rest/' + (0, _emberInflector.pluralize)(modelName) + '/' + id + '.json';
        }
    });
});
;define('burg-kapellendorf/app', ['exports', 'burg-kapellendorf/resolver', 'ember-load-initializers', 'burg-kapellendorf/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define("burg-kapellendorf/cldrs/de", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ "locale": "de-de", "parentLocale": "de" }, { "locale": "de", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1];if (ord) return "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "Jahr", "relative": { "0": "dieses Jahr", "1": "nächstes Jahr", "-1": "letztes Jahr" }, "relativeTime": { "future": { "one": "in {0} Jahr", "other": "in {0} Jahren" }, "past": { "one": "vor {0} Jahr", "other": "vor {0} Jahren" } } }, "month": { "displayName": "Monat", "relative": { "0": "diesen Monat", "1": "nächsten Monat", "-1": "letzten Monat" }, "relativeTime": { "future": { "one": "in {0} Monat", "other": "in {0} Monaten" }, "past": { "one": "vor {0} Monat", "other": "vor {0} Monaten" } } }, "day": { "displayName": "Tag", "relative": { "0": "heute", "1": "morgen", "2": "übermorgen", "-2": "vorgestern", "-1": "gestern" }, "relativeTime": { "future": { "one": "in {0} Tag", "other": "in {0} Tagen" }, "past": { "one": "vor {0} Tag", "other": "vor {0} Tagen" } } }, "hour": { "displayName": "Stunde", "relativeTime": { "future": { "one": "in {0} Stunde", "other": "in {0} Stunden" }, "past": { "one": "vor {0} Stunde", "other": "vor {0} Stunden" } } }, "minute": { "displayName": "Minute", "relativeTime": { "future": { "one": "in {0} Minute", "other": "in {0} Minuten" }, "past": { "one": "vor {0} Minute", "other": "vor {0} Minuten" } } }, "second": { "displayName": "Sekunde", "relative": { "0": "jetzt" }, "relativeTime": { "future": { "one": "in {0} Sekunde", "other": "in {0} Sekunden" }, "past": { "one": "vor {0} Sekunde", "other": "vor {0} Sekunden" } } } } }];
});
;define("burg-kapellendorf/cldrs/en", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
;define('burg-kapellendorf/components/app-logo/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("burg-kapellendorf/components/app-logo/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nV7GVj+K", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"link-to\",[\"index\"],[[\"class\"],[\"logo d-flex\"]],{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"logo-brand\"],[8],[1,[26,\"t\",[\"brand.title\"],null],false],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"logo-city\"],[8],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[0,\"\\n    \"],[13,1],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/app-logo/template.hbs" } });
});
;define('burg-kapellendorf/components/footer-information/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("burg-kapellendorf/components/footer-information/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6GsZCVhR", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"footer-information\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"container d-flex justify-content-center\"],[8],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"footer-information-opening-hours\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"footer-information-headline\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"general.opening-hours.title\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"general.opening-hours.text\"],[[\"htmlSafe\"],[true]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[8],[0,\"\\n            \"],[1,[20,\"app-logo\"],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"footer-information-contact\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"footer-information-headline\"],[8],[0,\"\\n                \"],[1,[26,\"t\",[\"general.contact.title\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[8],[1,[26,\"t\",[\"brand.title\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[8],[1,[26,\"t\",[\"contact.street\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.houseno\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[8],[1,[26,\"t\",[\"contact.zip\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[0,\"\\n\\n            \"],[6,\"div\"],[10,\"class\",\"space-top\"],[8],[1,[26,\"t\",[\"general.tel.title\"],null],false],[9],[0,\"\\n            \"],[6,\"div\"],[8],[1,[26,\"t\",[\"contact.tel\"],null],false],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[13,1],[0,\"\\n\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/footer-information/template.hbs" } });
});
;define('burg-kapellendorf/components/footer-nav/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("burg-kapellendorf/components/footer-nav/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6rA+5YzN", "block": "{\"symbols\":[\"item\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"footer-nav\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"container d-flex justify-content-center\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"links\"]]],null,{\"statements\":[[4,\"link-to\",[[21,1,[\"link\"]]],[[\"class\"],[\"btn btn-link\"]],{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"nav-item-title\"],[8],[1,[26,\"t\",[[21,1,[\"title\"]]],[[\"htmlSafe\"],[true]]],false],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"nav-item-description\"],[8],[1,[26,\"t\",[[21,1,[\"description\"]]],[[\"htmlSafe\"],[true]]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n        \"],[13,2],[0,\"\\n\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/footer-nav/template.hbs" } });
});
;define('burg-kapellendorf/components/image-gallery/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        tagName: "section",
        classNames: ['gallery'],

        gallery: null,
        images: null,

        didReceiveAttrs: function didReceiveAttrs() {

            var gallery = this.get('gallery');

            this.set('images', []);
            var images = this.get('images');

            if (!Ember.isEmpty(gallery)) {
                gallery.get('images').forEach(function (image) {

                    var minWidth = image.minWidth ? image.minWidth : 1;
                    var minHeight = image.minHeight ? image.minHeight : 1;

                    var maxWidth = image.maxWidth ? image.maxWidth : Math.floor(Math.random() * 2);
                    var maxHeight = image.maxHeight ? image.maxHeight : Math.floor(Math.random() * 2);

                    image.width = Math.floor(Math.random() * maxWidth) + minWidth;
                    if (image.width > maxWidth) image.width = maxWidth;
                    image.height = Math.floor(Math.random() * maxHeight) + minHeight;
                    if (image.height > maxHeight) image.height = maxHeight;

                    images.push(image);
                });
            }
        }
    });
});
;define("burg-kapellendorf/components/image-gallery/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7QCRfNBT", "block": "{\"symbols\":[\"img\",\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"gallery-information article article-default article-grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[1,[22,[\"gallery\",\"title\"]],false],[9],[0,\"\\n        \"],[6,\"p\"],[8],[0,\"\\n            \"],[1,[22,[\"gallery\",\"description\"]],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[13,2],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"images\"]]],null,{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[11,\"style\",[27,[\"grid-column: span \",[21,1,[\"width\"]],\"; grid-row: span \",[21,1,[\"height\"]],\";\"]]],[8],[0,\"\\n        \"],[6,\"img\"],[11,\"src\",[27,[\"/gallery/\",[22,[\"gallery\",\"id\"]],\"/\",[21,1,[\"file\"]]]]],[11,\"alt\",[27,[[21,1,[\"alt\"]]]]],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/image-gallery/template.hbs" } });
});
;define('burg-kapellendorf/components/info-copyright/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("burg-kapellendorf/components/info-copyright/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sBpLksxp", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"copyright\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"container d-flex justify-content-center\"],[8],[0,\"\\n        \"],[13,1],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/info-copyright/template.hbs" } });
});
;define('burg-kapellendorf/components/main-image/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("burg-kapellendorf/components/main-image/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "10w4tHWt", "block": "{\"symbols\":[\"&default\"],\"statements\":[[6,\"div\"],[10,\"class\",\"main-header\"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"main-header-content d-flex justify-content-end\"],[8],[0,\"\\n        \\n        \"],[13,1],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"main-header-logos d-flex justify-content-center\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/img/logo-thueringer-schloesser-und-gaerten.jpg\"],[11,\"alt\",[27,[[26,\"t\",[\"logos.thuringianCastlesAndGardens.alt\"],null],\"'\"]]],[8],[9],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/img/logo-erfurt.jpg\"],[11,\"alt\",[27,[[26,\"t\",[\"logos.erfurt.alt\"],null],\"'\"]]],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"main-header-quote\"],[8],[0,\"\\n            \"],[1,[20,\"quote\"],false],[0,\"\\n        \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"main-header-banner d-flex\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"main-header-banner-brand\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"brand.title\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"main-header-banner-city\"],[8],[0,\"\\n            \"],[1,[26,\"t\",[\"contact.city\"],null],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/main-image/template.hbs" } });
});
;define('burg-kapellendorf/components/next-event/component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    tagName: "section",
    classNames: ['next-event'],

    intl: Ember.inject.service(),

    events: null,

    nextEvent: null,

    didReceiveAttrs: function didReceiveAttrs() {

      if (this.get('events')) {

        var today = new Date();
        var eventDate = null;
        var found = false;

        this.get('events').forEach(function (event) {
          if (!found && event.get('from').getTime() > today.getTime()) {
            eventDate = event.get('from');
            found = true;
          }
        });

        if (found) {
          var nextEventDate = this.get('intl').formatRelative(today.setDate(eventDate.getDate()));
          this.set('nextEvent', nextEventDate);
        }
      }
    }
  });
});
;define("burg-kapellendorf/components/next-event/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8Eh9Dtaj", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/components/next-event/template.hbs" } });
});
;define('burg-kapellendorf/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('burg-kapellendorf/formats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
});
;define('burg-kapellendorf/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('burg-kapellendorf/helpers/app-version', ['exports', 'burg-kapellendorf/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('burg-kapellendorf/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
;define('burg-kapellendorf/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
;define('burg-kapellendorf/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
;define('burg-kapellendorf/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
;define('burg-kapellendorf/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define('burg-kapellendorf/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
;define('burg-kapellendorf/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
;define('burg-kapellendorf/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _formatMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
;define('burg-kapellendorf/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _formatNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
;define('burg-kapellendorf/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _formatRelative) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
;define('burg-kapellendorf/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _formatTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
;define('burg-kapellendorf/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('burg-kapellendorf/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('burg-kapellendorf/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
;define('burg-kapellendorf/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
;define('burg-kapellendorf/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _intlGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intlGet.default;
    }
  });
});
;define('burg-kapellendorf/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('burg-kapellendorf/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define('burg-kapellendorf/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('burg-kapellendorf/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _l) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _l.default;
    }
  });
});
;define('burg-kapellendorf/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
;define('burg-kapellendorf/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('burg-kapellendorf/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('burg-kapellendorf/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('burg-kapellendorf/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('burg-kapellendorf/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('burg-kapellendorf/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('burg-kapellendorf/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('burg-kapellendorf/helpers/t-html', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
;define('burg-kapellendorf/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _t) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
;define('burg-kapellendorf/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
;define('burg-kapellendorf/helpers/trim', ['exports', 'ember-cli-string-helpers/helpers/trim'], function (exports, _trim) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trim.default;
    }
  });
  Object.defineProperty(exports, 'trim', {
    enumerable: true,
    get: function () {
      return _trim.trim;
    }
  });
});
;define('burg-kapellendorf/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
;define('burg-kapellendorf/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define('burg-kapellendorf/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
;define('burg-kapellendorf/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
;define('burg-kapellendorf/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('burg-kapellendorf/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'burg-kapellendorf/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('burg-kapellendorf/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('burg-kapellendorf/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('burg-kapellendorf/initializers/export-application-global', ['exports', 'burg-kapellendorf/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("burg-kapellendorf/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('burg-kapellendorf/instance-initializers/ember-intl', ['exports', 'ember-intl/initializer'], function (exports, _initializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.instanceInitializer = undefined;
  exports.instanceInitializer = _initializer.instanceInitializer;
  exports.default = _initializer.default;
});
;define('burg-kapellendorf/mixins/google-pageview', ['exports', 'burg-kapellendorf/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    beforePageviewToGA: function beforePageviewToGA(ga) {},

    pageviewToGA: Ember.on('didTransition', function (page, title) {
      var page = page ? page : this.get('url');
      var title = title ? title : this.get('url');

      if (Ember.get(_environment.default, 'googleAnalytics.webPropertyId') != null) {
        var trackerType = Ember.getWithDefault(_environment.default, 'googleAnalytics.tracker', 'analytics.js');

        if (trackerType === 'analytics.js') {
          var globalVariable = Ember.getWithDefault(_environment.default, 'googleAnalytics.globalVariable', 'ga');

          this.beforePageviewToGA(window[globalVariable]);

          window[globalVariable]('send', 'pageview', {
            page: page,
            title: title
          });
        } else if (trackerType === 'ga.js') {
          window._gaq.push(['_trackPageview']);
        }
      }
    })

  });
});
;define('burg-kapellendorf/models/gallery', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        "title": _emberData.default.attr('string'),
        "description": _emberData.default.attr('string'),
        "images": _emberData.default.attr()
    });
});
;define('burg-kapellendorf/models/navigation', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        "title": _emberData.default.attr('string'),
        "description": _emberData.default.attr('string'),
        "link": _emberData.default.attr('string'),
        "active": _emberData.default.attr('boolean'),
        "type": _emberData.default.attr('string')
    });
});
;define('burg-kapellendorf/models/news', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        "from": _emberData.default.attr('date'),
        "to": _emberData.default.attr('date'),
        "title": _emberData.default.attr('string'),
        "description": _emberData.default.attr('string'),
        "nextEvent": _emberData.default.attr('boolean', { defaultValue: false }),
        "eventStillInProgress": _emberData.default.attr('boolean', { defaultValue: false })
    });
});
;define('burg-kapellendorf/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('burg-kapellendorf/router', ['exports', 'burg-kapellendorf/config/environment', 'burg-kapellendorf/mixins/google-pageview'], function (exports, _environment, _googlePageview) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend(_googlePageview.default, {
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('experience');
    this.route('news');
    this.route('contact');
    this.route('imprint');
    this.route('dataprotection');
    this.route('disclaimer');
    this.route('past');
  });

  exports.default = Router;
});
;define('burg-kapellendorf/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    intl: Ember.inject.service(),

    beforeModel: function beforeModel() {
      return this.get('intl').setLocale(['de-de']);
    },
    model: function model() {

      var quoteIndex = 1 + Math.floor(Math.random() * Math.floor(5));

      return Ember.RSVP.hash({
        navigation: this.get('store').findAll('navigation').then(function (nav) {
          return nav.filter(function (nav) {
            return nav.get('type') === 'main';
          });
        }),
        copyrightTo: new Date().getFullYear(),
        footerNavLinks: this.get('store').findAll('navigation').then(function (nav) {
          return nav.filter(function (nav) {
            return nav.get('type') === 'footer';
          });
        }),
        quote: this.get('intl').t("quotes." + quoteIndex, {
          htmlSafe: true
        })
      });
    }
  });
});
;define('burg-kapellendorf/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('burg-kapellendorf/routes/dataprotection', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('burg-kapellendorf/routes/disclaimer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('burg-kapellendorf/routes/experience', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        store: Ember.inject.service(),

        model: function model() {
            return Ember.RSVP.hash({
                events: this.get('store').findAll('news').then(function (events) {
                    return events.filter(function (event) {
                        return event.get('from').getTime() > new Date().getTime();
                    });
                })
            });
        }
    });
});
;define('burg-kapellendorf/routes/imprint', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('burg-kapellendorf/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        store: Ember.inject.service(),

        model: function model() {
            return Ember.RSVP.hash({
                events: this.get('store').findAll('news').then(function (events) {
                    return events.filter(function (event) {
                        return event.get('from').getTime() > new Date().getTime();
                    });
                })
                /*,
                galleries: this.get('store').findAll('gallery').then((gallery) => {
                    return gallery.filter((gallery) => {
                        if (gallery.get('id') === 'welcome') {
                            return true;
                        }
                    });
                })*/
            });
        }
    });
});
;define('burg-kapellendorf/routes/news', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    store: Ember.inject.service(),

    model: function model() {

      var found = false;

      return Ember.RSVP.hash({
        events: this.get('store').findAll('news').then(function (events) {
          return events.filter(function (event) {
            var visible = false;
            var msPerDay = 86400000;

            if (event.get('to') && event.get('to').getTime() > new Date().getTime() || event.get('from').getTime() + msPerDay > new Date().getTime()) {
              visible = true;

              if (event.get('to') && event.get('to').getTime() < new Date().getTime()) {
                visible = false;
              }
            }

            return visible;
          }).filter(function (event) {
            var msPerDay = 86400000;
            if (!found && event.get('from').getTime() > new Date().getTime()) {
              event.set('nextEvent', true);
              found = true;
            } else {
              if (new Date().getTime() > event.get('from').getTime() && new Date().getTime() < event.get('from').getTime() + msPerDay || new Date().getTime() > event.get('from').getTime() && event.get('to') && new Date().getTime() < event.get('to').getTime() + msPerDay) {
                event.set('eventStillInProgress', true);
              }
            }
            return true;
          });
        })

      });
    }
  });
});
;define('burg-kapellendorf/routes/past', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('burg-kapellendorf/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('burg-kapellendorf/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _intl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
;define("burg-kapellendorf/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xKDuwcbE", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"nav\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"container d-flex justify-content-between\"],[8],[0,\"\\n\\n\\t\\t\"],[1,[20,\"app-logo\"],false],[0,\"\\n\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"nav-items\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"navigation\"]]],null,{\"statements\":[[4,\"link-to\",[[21,1,[\"link\"]]],[[\"class\"],[\"btn btn-link\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"nav-item-title\"],[8],[1,[26,\"t\",[[21,1,[\"title\"]]],[[\"htmlSafe\"],[true]]],false],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"nav-item-description\"],[8],[1,[26,\"t\",[[21,1,[\"description\"]]],[[\"htmlSafe\"],[true]]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\n\\t\"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[1,[26,\"main-image\",null,[[\"quote\"],[[22,[\"model\",\"quote\"]]]]],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"page-content clearfix\"],[8],[0,\"\\n\\t\"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[4,\"info-copyright\",null,null,{\"statements\":[[0,\"\\t\"],[1,[26,\"t\",[\"copyright\"],[[\"year\",\"brand\",\"city\",\"htmlSafe\"],[[22,[\"model\",\"copyrightTo\"]],[26,\"t\",[\"brand.title\"],null],[26,\"t\",[\"contact.city\"],null],true]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[1,[26,\"footer-nav\",null,[[\"links\"],[[22,[\"model\",\"footerNavLinks\"]]]]],false],[0,\"\\n\\n\"],[1,[20,\"footer-information\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/application.hbs" } });
});
;define("burg-kapellendorf/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kWblLj+K", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"d-flex flex-column flex-md-row\"],[8],[0,\"\\n        \\n        \"],[6,\"div\"],[10,\"class\",\"article article-highlighted w50\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"erreichbar\"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    \"],[6,\"strong\"],[8],[0,\"vorab\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Die Wasserburg Kapellendorf gehört zur Stiftung Thüringer Schlösser und Gärten.\\n                    Sie beherbergt ein Museum, welches durch die Stadt Erfurt betrieben wird.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    \"],[6,\"strong\"],[8],[0,\"geöffnet\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Dienstag bis Sonntag 10 Uhr bis 12 Uhr und 13 Uhr bis 17 Uhr\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    \"],[6,\"strong\"],[8],[0,\"erreichbar\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    mit dem PKW über die Bundesstraße 7, zwischen Weimar und Jena, Abfahrt Frankendorf\"],[6,\"br\"],[8],[9],[0,\"\\n                    mit dem Bus: Verbindung ab Apolda – Linie 291\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"brand.title\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[9],[0,\"\\n                    \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.street\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.houseno\"],null],false],[9],[0,\">\"],[9],[0,\"\\n                    \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.zip\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[9],[0,\"\\n                    \\n                    \"],[6,\"div\"],[10,\"class\",\"space-top\"],[8],[1,[26,\"t\",[\"general.tel.title\"],null],false],[9],[0,\"\\n                    \"],[6,\"div\"],[8],[6,\"a\"],[11,\"href\",[27,[\"tel:\",[26,\"t\",[\"contact.tel\"],null]]]],[8],[1,[26,\"t\",[\"contact.tel\"],null],false],[9],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Mail: \"],[6,\"a\"],[11,\"href\",[27,[\"mailto:\",[26,\"t\",[\"contact.email\"],null]]]],[8],[1,[26,\"t\",[\"contact.email\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Kuratorin, Schlossverwalterin: \"],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.firstname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.lastname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.title\"],null],false],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"article article-primary no-space w50\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"Förderverein\"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    \\\"Wasserburg und Kapellendorf e.V.\\\"\"],[6,\"br\"],[8],[9],[0,\"\\n                    \"],[6,\"strong\"],[8],[0,\"Antje Strzata\"],[9],[0,\", Vereinsvorsitzende\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Am Burgplatz 1\"],[6,\"br\"],[8],[9],[0,\"\\n                    99510 Kapellendorf \\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    \"],[6,\"a\"],[10,\"href\",\"mailto:antje@strzata.de\"],[8],[0,\"antje@strzata.de\"],[9],[6,\"br\"],[8],[9],[0,\"\\n                    \"],[6,\"a\"],[10,\"href\",\"http://www.kapellendorf.de\"],[10,\"target\",\"_blank\"],[8],[0,\"www.kapellendorf.de\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Link zur Satzung \"],[6,\"a\"],[10,\"href\",\"/data/Foerderverein-Satzung-08_03_11.doc\"],[8],[0,\"hier\"],[9],[0,\".\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/contact.hbs" } });
});
;define("burg-kapellendorf/templates/dataprotection", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EHV4O4zF", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"article article-default\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[1,[26,\"t\",[\"navigation.dataprotection.title\"],null],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Durch den Besuch der Website des Anbieters können Informationen über den Zugriff (Datum, Uhrzeit, betrachtete Seite) gespeichert werden. Diese Daten gehören nicht zu den personenbezogenen Daten, sondern sind anonymisiert. Sie werden ausschließlich zu statistischen Zwecken ausgewertet. Eine Weitergabe an Dritte, zu kommerziellen oder nichtkommerziellen Zwecken, findet nicht statt.\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann. Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten. \\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                \"],[6,\"strong\"],[8],[0,\"Fotos\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Dirk Urban (Stadtverwaltung Erfurt)\"],[6,\"br\"],[8],[9],[0,\"\\n                Frank Kahle\"],[6,\"br\"],[8],[9],[0,\"\\n                Gerhard Berndt\"],[6,\"br\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                \"],[6,\"strong\"],[8],[0,\"Urheber- und Leistungsschutzrechte\"],[9],[0,\">\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/dataprotection.hbs" } });
});
;define("burg-kapellendorf/templates/disclaimer", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "31+T13ry", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"article article-default\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[1,[26,\"t\",[\"navigation.disclaimer.title\"],[[\"htmlSafe\"],[true]]],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen Autors und nicht immer die Meinung des Anbieters wieder.\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Diese Website enthält Verknüpfungen zu Websites Dritter (\\\"externe Links\\\"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle dieser externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/disclaimer.hbs" } });
});
;define("burg-kapellendorf/templates/experience", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OqEgGaH+", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"article article-default article-grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"geführt\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Sie können sich jederzeit zu Führungen durch Burg und Museum anmelden.\"],[6,\"br\"],[8],[9],[0,\"\\n                Es gibt abgestimmte Führungen für Erwachsene, Kinder und Schulklassen.\"],[6,\"br\"],[8],[9],[0,\"\\n                Nehmen Sie Kontakt mit uns auf!\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-image\"],[10,\"style\",\"background-image: url(/img/guides.jpg);\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"article article-default article-grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-image\"],[10,\"style\",\"background-image: url(/img/rental.jpg);\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"gewohnt\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Vermietung von Räumen und dem Burghof\"],[6,\"br\"],[8],[9],[0,\"\\n                \"],[6,\"a\"],[10,\"href\",\"http://www.thueringerschloesser.de\"],[10,\"target\",\"_blank\"],[8],[0,\"www.thueringerschloesser.de\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"article article-default article-grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"geschaut\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Besuchen Sie unser Burgmuseum in der Kemenate!\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n              Wir zeigen wechselnde Ausstellungen und eine Dauerausstelung zur Geschichte der Burg.\"],[6,\"br\"],[8],[9],[0,\" \\n              Die Themen sind modern gestaltet und es gibt Mitmachstaionen für unsere jungen Gäste.\"],[6,\"br\"],[8],[9],[0,\"\\n              \"],[6,\"br\"],[8],[9],[0,\"\\n              Wir freuen uns auf Ihren Besuch.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-image\"],[10,\"style\",\"background-image: url(/img/visit.jpg);\"],[8],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n    \"],[1,[26,\"next-event\",null,[[\"events\"],[[22,[\"model\",\"events\"]]]]],false],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/experience.hbs" } });
});
;define("burg-kapellendorf/templates/imprint", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SljQdQHr", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"article article-default\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[1,[26,\"t\",[\"navigation.imprint.title\"],null],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Landeshauptstadt Erfurt\"],[6,\"br\"],[8],[9],[0,\"\\n                Stadtverwaltung\"],[6,\"br\"],[8],[9],[0,\"\\n                Fischmarkt 1\"],[6,\"br\"],[8],[9],[0,\"\\n                99084 Erfurt\"],[6,\"br\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Kulturdirektion\"],[6,\"br\"],[8],[9],[0,\"\\n                Benediksplatz 1\"],[6,\"br\"],[8],[9],[0,\"\\n                99084 Erfurt\"],[6,\"br\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"brand.title\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.street\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.houseno\"],null],false],[9],[0,\">\"],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.zip\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.city\"],null],false],[9],[9],[0,\"\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"space-top\"],[8],[1,[26,\"t\",[\"general.tel.title\"],null],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"a\"],[11,\"href\",[27,[\"tel:\",[26,\"t\",[\"contact.tel\"],null]]]],[8],[1,[26,\"t\",[\"contact.tel\"],null],false],[9],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Mail: \"],[6,\"a\"],[11,\"href\",[27,[\"mailto:\",[26,\"t\",[\"contact.email\"],null]]]],[8],[1,[26,\"t\",[\"contact.email\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Kuratorin, Schlossverwalterin: \"],[6,\"strong\"],[8],[1,[26,\"t\",[\"contact.firstname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.lastname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.title\"],null],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/imprint.hbs" } });
});
;define("burg-kapellendorf/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l7Ua8BsO", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n    \\n    \"],[6,\"div\"],[10,\"class\",\"article article-default article-grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-image\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/img/welcome.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[1,[26,\"t\",[\"navigation.welcome.title\"],null],false],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                \"],[6,\"strong\"],[8],[0,\"In dem kleinen Ort Kapellendorf liegt eine der am besten erhaltenen und größten Wasserburgen Thüringens.\"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Die Burg beherbergt sei 1950 ein Burgmuseum und ist seit vielen Jahren ein Ort für besondere Veranstaltungen. Jährlich finden im historischen Burghof vor malerischer Kulisse Märkte und Theaterveranstaltungen statt. Als Eigentümerin bemüht sich seit 1998 die Stiftung Thüringer Schlösser und Gärten um den Erhalt der Anlage. Derzeit wird an einer Konzeption zur Sanierung und Nutzung der Wasserburg Kapellendorf gearbeitet. Sie sind herzlich eingeladen, besuchen Sie unser Museum in der idyllisch gelegenen Burganlage!\\n            \"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n                Wir freuen uns auf Ihren Besuch.\"],[6,\"br\"],[8],[9],[0,\"\\n                \"],[1,[26,\"t\",[\"contact.firstname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.lastname\"],null],false],[0,\" \"],[1,[26,\"t\",[\"contact.title\"],null],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \\n    \"],[1,[26,\"next-event\",null,[[\"events\"],[[22,[\"model\",\"events\"]]]]],false],[0,\"\\n\\n\"],[0,\"    \\n    \"],[6,\"section\"],[10,\"class\",\"gallery ember-view\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-information article article-default article-grid\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"Die Burg und Ihre Gäste\"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Tauchen Sie ein in eine Welt voller Geschichte und Mythen. Besuchen Sie unsere Ausstellungen, Führungen und Veranstaltungen oder kommen Sie einfach nur Entspannung auf unsere Burg.\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/005.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/22.04.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/048_DSC02457.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 2; grid-row: span 2;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/058_DSC02468.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/E_012_010_KAP_L.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/001.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/002.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/003.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/004.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 2;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMG_1683.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMG_1684.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMGP2171.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMGP2211.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMGP2212.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMGP2627.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/IMGP3716.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/Schiessscharte.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/Wappenstein.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_1342-43.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_1382.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_1440.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 1; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7176.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7182.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7232.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7244-47.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 1;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7321-31.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"gallery-image\"],[10,\"style\",\"grid-column: span 0; grid-row: span 0;\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/gallery/welcome/DSC_7336.jpg\"],[10,\"alt\",\"\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/index.hbs" } });
});
;define("burg-kapellendorf/templates/news", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "62chTggF", "block": "{\"symbols\":[\"event\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\n\"],[0,\"\\n\"],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"article article-default article-grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n            \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"Burgmuseum\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"\\n              Das Museum in der mittelalterlichen Kemenate informiert über die Geschichte der Burg und des historisch bedeutsamen Ortes.\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n              Ein Blick vom Wehrgang über die gesamte Anlage ist ein Muss für den Kapellendorfbesuch.\"],[6,\"br\"],[8],[9],[0,\"\\n              Zudem zeigt die Burg wechselnde Sonderausstellungen.\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"article-image\"],[8],[0,\"\\n          \"],[6,\"img\"],[10,\"src\",\"/img/Plakat-Schwert.jpg\"],[10,\"alt\",\"\"],[10,\"class\",\"filled\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[6,\"section\"],[8],[0,\"\\n        \\n        \"],[6,\"div\"],[10,\"class\",\"article article-default\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"Veranstaltungen 2019 (vorläufig!)\"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"Unser Burgmuseum ist ganzjährig geöffent und wir bieten Fürhungen für Kinder und Erwachsene nach Voranmeldung an!\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\",\"events\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[11,\"class\",[27,[\"article article-\",[26,\"if\",[[21,1,[\"nextEvent\"]],\"highlighted\",\"default\"],null],\" article-grid \",[26,\"if\",[[21,1,[\"eventStillInProgress\"]],\"event-running\"],null]]]],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                    \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"\\n                        \"],[1,[26,\"format-date\",[[21,1,[\"from\"]]],null],false],[0,\"\\n                        \"],[4,\"if\",[[21,1,[\"to\"]]],null,{\"statements\":[[0,\" - \"],[1,[26,\"format-date\",[[21,1,[\"to\"]]],null],false]],\"parameters\":[]},null],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"div\"],[8],[0,\"\\n                        \"],[6,\"strong\"],[8],[1,[21,1,[\"title\"]],false],[9],[0,\"\\n                        \"],[6,\"p\"],[8],[1,[21,1,[\"description\"]],true],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/news.hbs" } });
});
;define("burg-kapellendorf/templates/past", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "P6iLmupm", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\n    \"],[6,\"div\"],[10,\"class\",\"d-flex flex-column flex-md-row\"],[8],[0,\"\\n        \\n        \"],[6,\"div\"],[10,\"class\",\"article article-highlighted w50\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"ritterlich und märchenhaft\"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Thüringen besitzt eine Vielzahl mittelalterlicher Burganlagen. Sie sind zum Teil zu Schlössern geworden, nur wenige sind optisch wehrhafte Burgen mit verschiedenen Funktionen geblieben.\"],[6,\"br\"],[8],[9],[0,\"\\n                    Ein solches Kleinod ist die Wasserburg Kapellendorf, die beschaulich im Tal des Ortes liegt. Sie ist seit 1998 Eigentum der Stiftung Thüringer Schlösser und Gärten. Die Stadt Erfurt verwaltet sie als Nebeneinrichtung des Stadtmuseums „Haus zu Stockfisch“. \\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Der Ort Kapellendorf, im Weimarer Land gelegen, zählt heute gerade etwa 450 Einwohner und doch verbindet sich mit ihm ein bedeutendes Stück mittelalterlicher Geschichte. Die frühe Nennung als „Capelladorf“ im Jahr 833, weist ihn als einen der ältesten Orte Thüringens aus. Erst etwa 300 Jahre später errichteten die Burggrafen von Kirchberg in der Talniederung eine Wasserburg. \\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Die Kirchberger Burg, die im Laufe des 12. Jahrhunderts entstand, wurde im späten Mittelalter mit dem Erwerb durch die Stadt Erfurt auf über zwei Hektar erweitert. Der Besucher kann diese erste Anlage noch gut erkennen. Das kleine in sich geschlossene Areal erhebt sich im heutigen Innenhof als „Burg in der Burg“. Wie eng Erfurt und Kapellendorf verbunden waren zeigt sich in der Bautätigkeit. Über viele Jahre war die Stadt Eigentümerin der Burg, bis sie 1509 den Besitz an die Wettiner verkaufte. Die Burg wurde zum Amtssitz. Ein gänzlicher Umbau zum Schloss erfolgte nicht, wodurch ihr der wehrhafte Charakter mit nahezu allen Elementen einer Burg, wie Türmen, Mauern, Burgküche usw. geblieben ist.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Den Beinamen „Raubritterburg“ verdankt sie einer Belagerung im Jahr 1451: Der Ritter Apel Vitztum von Roßla und sein Bruder verschanzten sich mit einer kurz zuvor überfallenen Gesandtschaft auf der Burg. Erst nach einer gütlichen Vereinbarung gelang es, die Gefangenen nach über acht Wochen zu befreien.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Kurz danach erfolgte der endgültige Verkauf der Burg. Fast drei Jahrhunderte war es still um die Wasserburg Kapellendorf, bis sie 1806 erneut ins Blickfeld der Geschichte rückte: In den Schlachten bei Jena und Auerstedt diente sie als Hauptlager der preußischen Truppen.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Neben dem Museum und den ganzjährig angebotenen Führungen in und um die Burg, gibt es ein vielseitiges Kulturprogramm.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Die Wasserburg Kapellendorf mit ihrer fast 900 Jahre alten Geschichte lädt ein, auf einen Besuch im Museum, zu einer der Veranstaltungen oder einfach auf einen Spaziergang im idyllischen Burghof oder durch den Ort Kapellendorf selbst. \\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[8],[0,\"\\n                    Sie sind herzlich eingeladen!\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"article article-primary no-space w50\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"article-content\"],[8],[0,\"\\n                \"],[6,\"h2\"],[10,\"class\",\"article-headline\"],[8],[0,\"Zum Weiterlesen\"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Biereye, Johannes: Kapellendorf, in: Heimatglocken, Sonderbeilagen der Apoldaer Nachrichten, 3/ 9, 1932.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Bünz. Enno: Adelsburg-Raubnest-Amtssitz. Die Wasserburg Kapellendorf in der mittelalterlichen Geschichte Thüringens (Jb. der Thüringer Stiftung Schlösser und Gärten, 4(2000), 2001, S. 39-50.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Laß, Heiko: Wasserburg Kapellendorf „der stad Erforde redlich verkouft“, in: Höfische Kostbarkeiten in Thüringen. Historische Anlagen der Stiftung Thüringer Schlösser und Gärten, hg. v. Helmut-Eberhard Paulus, Regensburg 2007, S. 119-125.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Lehfeldt, Paul: Kapellendorf, in: Bau- und Kunstdenkmäler Thüringens, Band 18, Jena 1888.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Moszner, Karl: Eine burgenpflegerische Glanzleistung, in: Weimar, Ein Kulturspiegel für Stadt und Land 7, Heft 3, 1963.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Ders.: Die Wasserburg Kapellendorf. Ihre Geschichte und Baugeschichte, Weimar 1972.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Neumann, Gotthard: Unsere Ausgrabungen in der Wasserburg Kapellendorf, in: Thüringer Fähnlein, 2. Jg. Heft 12, 1933, S. 705-712.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Schuchardt, Hans: Die Wasserburg Kapellendorf, Weimar 1933.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Wäscher, Hermann: Die Baugeschichte der Wasserburg Kapellendorf, Halle 1961.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Weiner, Franz: Geschichte des Ortes Kapellendorf insbesondere seiner Burg und seines Klosters mit Berücksichtigung der früheren Amtsdörfer Frankendorf, Hammerstedt, Hohlstedt, Großschwabhausen, Stobra und Hermstedt, Weimar 1900.\\n                \"],[9],[0,\"\\n                \"],[6,\"p\"],[10,\"class\",\"article-item\"],[8],[0,\"\\n                    Wittmann, Helge: Zur Frühgeschichte der Kirche von Kapellendorf, in: Die Kirche von Kapellendorf. Studien zu Geschichte und Architektur einer ländlichen Pfarr- und Klosterkirche, hg. v. Dems., Petersberg 2003, S. 11-29.\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \\n    \"],[9],[0,\"\\n    \\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "burg-kapellendorf/templates/past.hbs" } });
});
;define("burg-kapellendorf/translations/de-de", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = { "brand": { "title": "Museum Wasserburg" }, "contact": { "city": "Kapellendorf", "email": "wasserburg-kapellendorf@gmx.de", "firstname": "Marie", "houseno": "1", "land": "Deutschland", "lastname": "Linz", "street": "Am Burgplatz", "tel": "036425 - 22 48 5", "title": "M.A.", "zip": "99510" }, "copyright": "&copy; Copyright {year} - {brand} {city}", "general": { "contact": { "title": "Kontakt" }, "days": "Tage", "event": { "next": "N&auml;chste Veranstaltung" }, "hours": "Stunden", "minutes": "Minuten", "opening-hours": { "text": "DIENSTAG BIS SONNTAG<br/>10.00-12.00 Uhr<br/>UND<br/>13.00-17.00 Uhr", "title": "&Ouml;ffnungszeiten" }, "tel": { "title": "Telefon und Fax" } }, "logos": { "erfurt": { "alt": "Landeshauptstadt Erfurt" }, "thuringia": { "alt": "Th&uuml;ringen entdecken" }, "thuringianCastlesAndGardens": { "alt": "Th&uuml;ringer Schl&ouml;sser und G&auml;rten" } }, "navigation": { "contact": { "description": "Kontakt und &Ouml;ffnungszeiten", "title": "Erreichbar" }, "dataprotection": { "description": "", "title": "Datenschutz" }, "disclaimer": { "description": "", "title": "Haftungsausschluss" }, "experience": { "description": "F&uuml;hrungen und Vermietungen", "title": "Erlebbar" }, "imprint": { "description": "", "title": "Impressum" }, "news": { "description": "Veranstaltungen und Museum", "title": "Aktuell" }, "past": { "description": "Geschichte der Burg", "title": "Vergangen" }, "welcome": { "description": "", "title": "Herzlich willkommen!" } }, "quotes": { "1": "Gro&szlig;e T&uuml;rme sieht man bald", "2": "Amtleute und Sch&ouml;sser bauen sch&ouml;ne Schl&ouml;sser", "3": "Nicht Steine sind es, die das Haus bauen, es sind die G&auml;ste", "4": "In alten Mauern spuken die Geister am liebsten", "5": "Alte Steine soll man nicht verr&uuml;cken" } };
});
;define("burg-kapellendorf/translations/en-us", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = { "brand": { "title": "Museum Wasserburg" }, "contact": { "city": "Kapellendorf", "email": "wasserburg-kapellendorf@gmx.de", "firstname": "Marie", "houseno": "1", "land": "Deutschland", "lastname": "Linz", "street": "Am Burgplatz", "tel": "036425 - 22 48 5", "title": "M.A.", "zip": "99510" }, "copyright": "Copyright © {year} - {brand} {city}", "general": { "contact": { "title": "Contact" }, "days": "Days", "event": { "next": "Next Event" }, "hours": "Hours", "minutes": "Minutes", "opening-hours": { "text": "DIENSTAG BIS SONNTAG<br/>10.00-12.00 Uhr<br/>UND<br/>13.00-17.00 Uhr", "title": "Opening Hours" }, "tel": { "title": "Telephone and Fax" } }, "logos": { "erfurt": { "alt": "State capital Erfurt" }, "thuringia": { "alt": "Discover Thuringia" }, "thuringianCastlesAndGardens": { "alt": "Thuringian castles and gardens" } }, "navigation": { "contact": { "description": "Contact and opening times", "title": "Contact" }, "dataprotection": { "description": "", "title": "Data Protection" }, "disclaimer": { "description": "", "title": "Disclaimer" }, "experience": { "description": "Guided tours and rentals", "title": "Experience" }, "imprint": { "description": "", "title": "Imprint" }, "news": { "description": "Events and museum", "title": "News" }, "past": { "description": "History of the castle", "title": "Past" }, "welcome": { "description": "", "title": "Welcome!" } }, "product": { "html": { "info": "<strong>{product}</strong> will cost <em>{price, number, USD}</em> if ordered by {deadline, date, time}" }, "info": "{product} will cost {price, number, USD} if ordered by {deadline, date, time}", "title": "Hello world!" }, "quotes": { "1": "Große Türme sieht man bald", "2": "Amtleute und Schösser bauen schöne Schlösser", "3": "Nicht Steine sind es, die das Haus bauen, es sind die Gäste", "4": "In alten Mauern spuken die Geister am liebsten", "5": "Alte Steine soll man nicht verrücken" } };
});
;define('burg-kapellendorf/utils/intl/missing-message', ['exports', 'ember-intl/utils/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
;define('burg-kapellendorf/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});
;

;define('burg-kapellendorf/config/environment', [], function() {
  var prefix = 'burg-kapellendorf';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("burg-kapellendorf/app")["default"].create({"name":"burg-kapellendorf","version":"0.0.0+cb25250e"});
          }
        
//# sourceMappingURL=burg-kapellendorf.map
