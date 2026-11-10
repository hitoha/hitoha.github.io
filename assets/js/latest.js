// Swap the built-in post list for the newest posts from hitoha.moe.
// If anything goes wrong the list rendered by Jekyll simply stays.
(function () {
  var list = document.querySelector('[data-latest]');
  if (!list || !window.fetch || !list.replaceChildren) return;

  var api = list.getAttribute('data-latest');
  var origin = new URL(api).origin;
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // "2026-09-08" -> "8 Sep 2026", the same shape Jekyll prints for the fallback list.
  function pretty(day) {
    var parts = day.split('-');
    return Number(parts[2]) + ' ' + months[Number(parts[1]) - 1] + ' ' + parts[0];
  }

  // WordPress returns titles as HTML (entities and all); read them as plain text.
  function plain(html) {
    return (new DOMParser().parseFromString(String(html), 'text/html').body.textContent || '').trim();
  }

  function row(post) {
    var day = String(post.date).slice(0, 10);
    var li = document.createElement('li');
    var time = document.createElement('time');
    var a = document.createElement('a');
    time.dateTime = day;
    time.textContent = pretty(day);
    a.href = post.link;
    a.rel = 'noopener';
    a.textContent = plain(post.title.rendered);
    li.append(time, a);
    return li;
  }

  fetch(api)
    .then(function (res) {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(function (posts) {
      var rows = posts
        .filter(function (p) {
          return p && p.title && /^\d{4}-\d{2}-\d{2}/.test(p.date) &&
            typeof p.link === 'string' && p.link.indexOf(origin + '/') === 0;
        })
        .map(row);
      if (rows.length) list.replaceChildren.apply(list, rows);
    })
    .catch(function () {});
})();
