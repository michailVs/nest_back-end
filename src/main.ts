import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger"
import { SwaggerModule } from "@nestjs/swagger/dist"
import { AppModule } from "./app.moduls"


async function start() {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Урок по продвинутому back-end')
        .setDescription('Документация по REST API')
        .setVersion('1.0.0')
        .addTag('MC')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)})
}

start()