import React from 'react';

import { map } from './map';

interface Item {
  title: string;
  key: string;
  children: Item[];
}

// 标题格式化 例如：title2FormatTitle('title') => 'title（标题）' ，需要在map.ts中定义映射关系
export const title2FormatTitle = (title: string): string => `${title}${map.has(title) ? `（${map.get(title)}）` : ''}`;

export const mapJSON2Tree = (title: string, value: any, isOpen = true): Item => {
  const res: Item = {
    title: title2FormatTitle(title),
    key: String(Math.random()),
    children: [],
  };

  // 这个和组件初始化的ExpandedKeys 互动
  if (isOpen) res.key = '0';

  if (Object.prototype.toString.call(value) === '[object Object]') {
    for (const key of Object.keys(value)) {
      res.children.push(mapJSON2Tree(key, value[key], false));
    }
  } else if (Object.prototype.toString.call(value) === '[object Array]') {
    for (let i = 0; i < value.length; i = i + 1) {
      res.children.push(mapJSON2Tree(String(i), value[i], false));
    }
  } else {
    res.title = title2FormatTitle(title) + ': ' + String(value);
  }

  return res;
};

// 遍历多叉树
const generateList = (data: Item[], list: { key: React.Key; title: string }[]) => {
  for (let i = 0; i < data.length; i = i + 1) {
    const node = data[i];

    list.push({ key: node.key, title: node.title });

    if (node.children) {
      generateList(node.children, list);
    }
  }
};

// 将树形结构转换为一维数组
export const tree2List = (data: Item[]): { key: React.Key; title: string }[] => {
  const list: { key: React.Key; title: string }[] = [];
  generateList(data, list);
  return list;
};

// 通过子节点的key，获取父节点的key
export const getParentKey = (key: React.Key, tree: Item[]): React.Key => {
  let parentKey: React.Key = '';

  for (let i = 0; i < tree.length; i = i + 1) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }

  return parentKey;
};
