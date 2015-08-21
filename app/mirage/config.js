export default function() {
  this.get('https://secure.alphasights.com/health.json', function() {
    return {
      app: 'ok'
    };
  });
}
