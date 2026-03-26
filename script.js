document.addEventListener('DOMContentLoaded', function () {
  var btns = document.querySelectorAll('.nav-btn');
  var tabs = document.querySelectorAll('.tab-content');
  var content = document.querySelector('.content-area');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = this.getAttribute('data-tab');

      btns.forEach(function (b) { b.classList.remove('active'); });
      tabs.forEach(function (t) { t.classList.remove('active'); });

      this.classList.add('active');
      document.getElementById('tab-' + id).classList.add('active');

      if (content) {
        content.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
});