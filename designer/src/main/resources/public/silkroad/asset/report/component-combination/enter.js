define(function(){function a(a){var b=[];b.push(a.rptJson),a.parentEl.innerHTML=a.rptHtml,a.reportId&&(g.reportId=a.reportId),g.reportBody=a.parentEl.parent,d||(d=e(g)),c=new f(g),c.start(c.mergeDepict(b))}function b(){c.dispose()}var c,d,e=di.shared.model.GlobalModel,f=di.shared.model.Engine,g={webRoot:"/silkroad"},h={start:a,dispose:b};return h});