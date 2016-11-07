$(document).ready(function () {
	var ME = {
		DOM: {
			$doc: $(document),
			$inlineWrappers: $('.inline-wrapper'),
			$logo: $('#logo'),
			$logoWra: $('#logo-wra'),
			$instructions: $('.instruction'),
			$closeChartBtn: $('.chart>.closeWra'),
			$codeCharts: $('#code-chart .chart-wra canvas'),
			$designCharts: $('#design-chart .chart-wra canvas'),
			$toolsCharts: $('#tools-chart .chart-wra canvas')
		},
		USE: {
			currPanle: null
		},
		DEFULT: {
			isFrist: true,
			offsetX: 390,
			offsetY: 10
		},
		CHARTSET: {
			base: {
				percentage: 0,
				speed: 10,
				fontFamily: 'Georgia',
				fontColor: '#FFF',
				lineColor: 'rgb(167, 236, 33)',
				lineWidth: 3,
				remainingLineColor: 'rgba(21, 143, 208, 0.1)'
			},
			code: [{
					percentage: 75,
					lineColor: 'rgb(167, 236, 33)'
			}, {
					percentage: 73,
					lineColor: 'rgb(255, 0, 98)'
			},
				{
					percentage: 80,
					lineColor: 'rgb(54, 215, 246)'
			},
				{
					percentage: 65,
					lineColor: 'rgb(255,255,0)'
			},
				{
					percentage: 68,
					lineColor: 'rgb(255,255,0)'
			}
			, {
					percentage: 80,
					lineColor: 'rgb(54, 215, 246)'
			},
				{
					percentage: 67,
					lineColor: 'rgb(255, 0, 98)'
			}, {
					percentage: 85,
					lineColor: 'rgb(167, 236, 33)'
			}],
			design: [{
					percentage: 70,
					lineColor: 'rgb(167, 236, 33)'
			}, {
					percentage: 68,
					lineColor: 'rgb(255, 0, 98)'
			},
				{
					percentage: 78,
					lineColor: 'rgb(54, 215, 246)'
			},
				{
					percentage: 65,
					lineColor: 'rgb(255,255,0)'
			}],
			tools: [{
					percentage: 90,
					lineColor: 'rgb(167, 236, 33)'
			}, {
					percentage: 85,
					lineColor: 'rgb(255, 0, 98)'
			},
				{
					percentage: 73,
					lineColor: 'rgb(54, 215, 246)'
			},
				{
					percentage: 83,
					lineColor: 'rgb(255,255,0)'
			}],
		},
		METHODS: {}
	};
	// 用于建立侧边的序号
	ME.METHODS.buildSerial = function ($list) {
		var index = 0;
		$list.each(function (i, item) {
			var $item = $(item),
				$dest = $item.find('.sequence');
			if ($item.data('repeat')) {
				--i;
			}
			$dest.text(i);
		});
	}

	ME.METHODS.buildSkillChart = function (baset, data, $list) {
			var set = {};
			$list.each(function (i, item) {
				set = $.extend({}, baset, data[i]);
				$(item).ClassyLoader(set);
			});
		}
		// 代码折叠打开
	ME.DOM.$doc.on('click', '.omitBtn', function (event) {
		var $self = $(this),
			$next = $self.next();
		$self.fadeOut(0);
		$next.fadeIn('slow');

	});
	// 代码折叠关闭
	ME.DOM.$doc.on('click', '.content-wrapper>.closeBtn', function (event) {
		var $dest = $(this).parent(),
			$prev = $dest.prev(),
			$firstNode = $dest.first(),
			$lastNode = $dest.last();
		$dest.fadeOut('slow', function () {
			$prev.fadeIn('slow');
		});
	});

	// 显示个人头像
	ME.DOM.$logo.on('click', function (event) {
		if (ME.DEFULT.isFrist) {
			var $logo = $(this);
			ME.DOM.$logoWra.css({
				top: ($logo.offset().top - ME.DOM.$logoWra.height() - ME.DEFULT.offsetY) | 0,
				left: ($logo.offset().left + $logo.width() / 2 - ME.DEFULT.offsetX) | 0
			});
			ME.DEFULT.isFrist = false;
		}
		ME.DOM.$logoWra.fadeToggle('slow');
	}).on('mouseleave', function (event) {
		ME.DOM.$logoWra.fadeOut('slow');
	})

	// 关闭个人技能列表
	ME.DOM.$closeChartBtn.on('click', function (event) {
		var $dest = $(this).parent();
		$dest.animate({
			top: '-100%',
			opacity: 0
		}, 'slow', 'swing');
		ME.USE.currPanle = null;
	});

	// 打开个人技能列表
	ME.DOM.$doc.on('click', '.instruction', function (event) {
		var $self = $(this),
			destId = $self.data('id'),
			$dest = null,
			top = 0;
		if (!destId) return console.log('not found id');
		if (ME.USE.currPanle) {
			ME.USE.currPanle.animate({
				top: '-100%',
				opacity: 0
			}, 'slow', 'swing');
		}
		ME.USE.currPanle = $dest = $(destId);
		$dest.css({
			marginTop: -($dest.height() / 2) | 0
		}).animate({
			top: '50%',
			opacity: 1
		}, 'slow', 'swing');


	});
	ME.METHODS.buildSerial(ME.DOM.$inlineWrappers);

	ME.METHODS.buildSkillChart(ME.CHARTSET.base, ME.CHARTSET.code, ME.DOM.$codeCharts);
	ME.METHODS.buildSkillChart(ME.CHARTSET.base, ME.CHARTSET.design, ME.DOM.$designCharts);
	ME.METHODS.buildSkillChart(ME.CHARTSET.base, ME.CHARTSET.tools, ME.DOM.$toolsCharts);
});
