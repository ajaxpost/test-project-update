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
    } else {
      console.log('暂无更新内容');
    }
    lastEtag = etag;
  }
};
