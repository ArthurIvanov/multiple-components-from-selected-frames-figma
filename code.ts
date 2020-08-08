for (const node of figma.currentPage.selection) {
	if (node.type === "FRAME") {
		const width = node.width;
		const height = node.height;
		const posX = node.x;
		const posY = node.y;
		const component = figma.createComponent();
		component.name = node.name;
		component.x = posX;
		component.y = posY;
		component.resize(width, height);
		const fills = node.fills;
		component.fills = fills;
		for (const n of node.children) {
			component.appendChild(n);
		}
		node.remove();
	} else if (node.type === "GROUP") {
		alert(
			"Please use 'Frame selection' instead of 'Group' for putting elements in one container"
		);
	}
}

figma.closePlugin();
