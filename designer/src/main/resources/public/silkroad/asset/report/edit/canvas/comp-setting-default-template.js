define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.compId,f=b.compType,g=c.$each,h=b.xAxis,i=(b.item,b.$index,b.yAxis),j=b.sAxis,k="";return k+='<div class="con-comp-setting-type1 j-comp-setting" data-comp-id="',k+=d(e),k+='" data-comp-type="',k+=d(f),k+='">\r\n    <div class="data-axis-line data-axis-line-34 j-comp-setting-line j-line-x" data-axis-type="x">\r\n        <span class="letter">横轴:</span>\r\n        ',g(h,function(a){k+='\r\n        <div class="item hover-bg j-root-line c-m" data-id="',k+=d(a.id),k+='">\r\n            <span class="item-text j-item-text icon-font" title="',k+=d(a.caption),k+="（",k+=d(a.name),k+='）">\r\n            ',k+=d(a.caption),a.name&&(k+="（",k+=d(a.name),k+="）"),k+='\r\n            </span>\r\n            <span class="icon hide j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),k+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-34 j-comp-setting-line j-line-y" data-axis-type="y">\r\n        <span class="letter">纵轴:</span>\r\n        ',g(i,function(a){k+='\r\n        <div class="item hover-bg j-root-line c-m" data-id="',k+=d(a.id),k+='">\r\n            ',"CHART"===b.compType&&(k+="\r\n                ",null===a.chartType?k+='\r\n                    <span class="icon-chart bar j-icon-chart" chart-type="bar" ></span>\r\n                ':(k+='\r\n                    <span class="icon-chart ',k+=d(a.chartType),k+=' j-icon-chart" chart-type="',k+=d(a.chartType),k+='" ></span>\r\n                '),k+="\r\n            "),k+='\r\n            <span class="item-text j-item-text icon-font" title="',k+=d(a.caption),k+="（",k+=d(a.name),k+='）">\r\n            ',k+=d(a.caption),a.name&&(k+="（",k+=d(a.name),k+="）"),k+='\r\n            </span>\r\n            <span class="icon hide j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),k+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-34 j-comp-setting-line j-line-s" data-axis-type="s">\r\n        <span class="letter">过滤轴:</span>\r\n        ',g(j,function(a){k+='\r\n        <div class="item hover-bg j-root-line" data-id="',k+=d(a.id),k+='">\r\n            <span class="item-text j-item-text" title="',k+=d(a.caption),k+="（",k+=d(a.name),k+='）">\r\n            ',k+=d(a.caption),a.name&&(k+="（",k+=d(a.name),k+="）"),k+='\r\n            </span>\r\n            <span class="icon-letter j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),k+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-48 data-btn-line">\r\n        <span class="letter">设置:</span>\r\n        <span class="icon-letter icon-letter-btn j-set-data-format">数据格式</span>\r\n        <span class="icon-letter icon-letter-btn j-norm-info-depict">指标信息描述</span>\r\n        <span class="icon-letter icon-letter-btn j-others-operate">其他操作</span>\r\n    </div>\r\n</div>'}return{render:b}});