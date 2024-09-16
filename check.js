console.log('worker init');

let lastEtag;

onmessage = (e) => {
  const data = e.data;
  if (data.type === 'check') {
    const etag = data.etag;
    if (lastEtag && etag !== lastEtag) {
      postMessage({
        type: 'hasUpdate',
      });
    }
    lastEtag = etag;
  }
};
