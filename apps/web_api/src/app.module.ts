import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule, GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql',
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault({})],
  }), PortfolioModule, AuthModule],
})
export class AppModule {
}
