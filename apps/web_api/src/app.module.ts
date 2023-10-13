import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@app/config/config.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import {
  ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { SkillsModule } from './skills/skills.module';


@Module({
  imports: [ConfigModule, ExperiencesModule, GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql',
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault({
      headers: {
        'access-control-allow-methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
      },
    })],
  }), SkillsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
