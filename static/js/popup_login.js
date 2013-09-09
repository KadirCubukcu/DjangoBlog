function popup()
{
  var generator=window.open('','name','height=400,width=500');

  generator.document.write('<html><head><title>Popup</title>');
  generator.document.write($("#test").html());
  generator.document.write('</body></html>');
  generator.document.close();
}