(function(){"use strict";console.log("worker init");let e;onmessage=a=>{const t=a.data;if(t.type==="check"){const s=t.etag;e&&s!==e?postMessage({type:"hasUpdate"}):console.log("暂无更新内容"),e=s}}})();
