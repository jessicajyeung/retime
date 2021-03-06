$(document).ready(function(){
  // console.log("ready")
  // ****** Navigation Menu ******* //
  $( ".cross" ).hide();
  $( ".menu" ).hide();

  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  // ******* Editable Table ******** //
  var $TABLE = $('#table');
  var $BTN = $('#export-btn');
  var $EXPORT = $('#export');

  // console.log($BTN)

  // *** update percentage of tasks done *** //
  update_percentage = function () {
    if ($(this).parents('tr').attr("data-state") == "done") {
      $(this).css('color', 'red');
      $(this).parents('tr').attr('data-state', "in_progress");
    }
    else {
      $(this).css('color', 'green');
      $(this).parents('tr').attr('data-state', "done");    
    }

    nb_tasks = $('tr.task').not('.hide').length
    nb_tasks_done = $("tr.task[data-state='done']").not('.hide').length

    if (nb_tasks > 0)
      percentage = parseInt(nb_tasks_done * 100 / nb_tasks);
    else
      percentage = 100;

    for (i = 0; i <= 100; i += 1)
      $('#percentage_pie').removeClass('progress-' + i);

    $('#percentage_pie').addClass('progress-' + percentage);
    $('#percentage_value').text(percentage);
  };

  // ****************** Table listeners *************************//
  $('.table-add').click(function () {
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
    $TABLE.find('table').append($clone);
    update_percentage();
  });

  $('.table-remove').click(function () {
    $(this).parents('tr').detach();
    update_percentage();
  });

  $('.table-up').click(function () {
    var $row = $(this).parents('tr');
    if ($row.index() === 1) return; // Don't go above the header
    $row.prev().before($row.get(0));
  });

  $('.table-down').click(function () {
    var $row = $(this).parents('tr');
    $row.next().after($row.get(0));
  });

  // *** A few jQuery helpers for exporting only *** //
  jQuery.fn.pop = [].pop;
  jQuery.fn.shift = [].shift;

  $BTN.click(function (event) {
    // console.log(event)
    event.preventDefault();
    var $rows = $TABLE.find('tr:not(:hidden)');
    var headers = [];
    var data = [];
    
    // *** Get the headers (add special header logic here) *** //
    $($rows.shift()).find('th:not(:empty)').each(function () {
      headers.push($(this).text().toLowerCase());
    });
    
    // *** Turn all existing rows into a loopable array *** //
    $rows.each(function () {
      var $td = $(this).find('td');
      var h = {};
      // console.log(h)
      
      // *** Use the headers from earlier to name our hash keys *** //
      headers.forEach(function (header, i) {
        h[header] = $td.eq(i).text();   
      });
      console.log($.trim(h.name))
      data.push($.trim(h.name));
    });

    for (var i = data.length - 1; i >= 0; i--) {
      data[i]
    }

    // console.log("data");
    // console.log(data);
    // console.log("headers");
    // console.log(headers);
    
    // Output the result
    $EXPORT.text(JSON.stringify(data));
    JSON.stringify(data);
    // console.log(JSON.stringify(data))
  });

  $('.mark_as_done').on('click', update_percentage);
  update_percentage();
});

