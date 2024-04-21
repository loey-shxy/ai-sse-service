# 使用官方 Node.js 镜像作为基础镜像
FROM node:19

# 设置容器内工作目录
WORKDIR /app

# 将当前目录下 /app的内容  复制到容器的 /app目录下
COPY ./app /app

# 安装项目依赖（包括npm包）
RUN npm ci --only=production

# 暴露应用端口（根据实际项目端口进行调整）
EXPOSE 3000

# 设置启动命令
CMD ["npm", "start"]